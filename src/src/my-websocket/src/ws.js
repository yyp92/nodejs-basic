const { EventEmitter } = require('events');
const http = require('http');
const crypto = require('crypto');

// 解码
function hashKey(key) {
    const sha1 = crypto.createHash('sha1');
    sha1.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11');
    return sha1.digest('base64');
}

// 然后用 mask key 来解密数据。
// 这个算法也是固定的，用每个字节的 mask key 和数据的每一位做按位异或就好了
function handleMask(maskBytes, data) {
    const payload = Buffer.alloc(data.length);

    for (let i = 0; i < data.length; i++) {
        payload[i] = maskBytes[i % 4] ^ data[i];
    }

    return payload;
}

// 我们只处理数据长度小于 125 的情况。
function encodeMessage(opcode, payload) {
    // payload.length < 126
    let bufferData = Buffer.alloc(payload.length + 2 + 0);;
    
    // 第一个字节是 opcode，我们把第一位置 1 ，通过按位或的方式。
    // 设置 FIN 为 1
    let byte1 = parseInt('10000000', 2) | opcode; 
    // 服务端给客户端回消息不需要 mask，所以第二个字节就是 payload 长度。
    let byte2 = payload.length;
  
    // 分别把这前两个字节的数据写到 buffer 里，指定不同的 offset
    bufferData.writeUInt8(byte1, 0);
    bufferData.writeUInt8(byte2, 1);
  
    // 之后把 payload 数据放在后面
    payload.copy(bufferData, 2);
    
    return bufferData;
}

// 类型
const OPCODES = {
    CONTINUE: 0,
    TEXT: 1, // 文本
    BINARY: 2, // 二进制
    CLOSE: 8,
    PING: 9,
    PONG: 10,
};

class MyWebsocket extends EventEmitter {
    constructor(options) {
        super(options);

        const server = http.createServer();
        server.listen(options.port || 8080);

        server.on('upgrade', (req, socket) => {
            this.socket = socket;
            socket.setKeepAlive(true);

            const resHeaders = [
                'HTTP/1.1 101 Switching Protocols',
                'Upgrade: websocket',
                'Connection: Upgrade',
                'Sec-WebSocket-Accept: ' + hashKey(req.headers['sec-websocket-key']),
                '',
                ''
            ].join('\r\n');

            socket.write(resHeaders);

            socket.on('data', (data) => {
                // console.log(data)
                this.processData(data);
            });

            socket.on('close', (error) => {
                this.emit('close');
            });
        });
    }

    handleRealData(opcode, realDataBuffer) {
        switch (opcode) {
            // 文本就转成 utf-8 的字符串
            case OPCODES.TEXT:
                this.emit('data', realDataBuffer.toString('utf8'));
                break;

            // 二进制数据就直接用 buffer 的数据
            case OPCODES.BINARY:
                this.emit('data', realDataBuffer);
                break;

            default:
                this.emit('close');
                break;
        }
    }

    // 读取 websocket 的数据
    processData(bufferData) {
        // 读取 8 位无符号整数的内容，也就是一个字节的内容。参数是偏移的字节，这里是 0。
        // 通过位运算取出后四位，这就是 opcode 了。
        const byte1 = bufferData.readUInt8(0);
        let opcode = byte1 & 0x0f; 

        // 用 buffer.readUInt8 读取一个字节的内容。
        // 先转成二进制字符串，这时第一位就是 mask，然后再截取后 7 位的子串，parseInt 成数字，这就是 payload 长度了。
        const byte2 = bufferData.readUInt8(1);
        const str2 = byte2.toString(2);
        const MASK = str2[0];

        // 这里的 curByteIndex 是存储当前处理到第几个字节的
        let curByteIndex = 2;
        // 如果那个 7 位的内容不超过 125，那它就是 payload 长度
        let payloadLength = parseInt(str2.substring(1), 2);

        // 如果 7 位的内容是 126，那就不用它了，用后面的 16 位的内容作为 payload 长度
        if (payloadLength === 126) {
            // 如果是 126，那就从第 3 个字节开始，读取 2 个字节也就是 16 位的长度，用 buffer.readUInt16BE 方法。
            payloadLength = bufferData.readUInt16BE(2);

            curByteIndex += 2;
        }
        // 如果 7 位的内容是 127，也不用它了，用后面那个 64 位的内容作为 payload 长度。
        else if (payloadLength === 127) {
            // 如果是 127，那就从第 3 个字节开始，读取 8 个字节也就是 64 位的长度，用 buffer.readBigUInt64BE 方法。
            payloadLength = bufferData.readBigUInt64BE(2);

            curByteIndex += 8;
        }


        // 但在读取数据之前，还有个 mask 要处理，这个是用来给内容解密的：
        // 读 4 个字节，就是 mask key。
        let realData = null;

        if (MASK) {
            const maskKey = bufferData.slice(curByteIndex, curByteIndex + 4);  
            curByteIndex += 4;

            const payloadData = bufferData.slice(curByteIndex, curByteIndex + payloadLength);
            realData = handleMask(maskKey, payloadData);
        }
        else {
            realData = bufferData.slice(curByteIndex, curByteIndex + payloadLength);;
        }

        this.handleRealData(opcode, realData);
    }

    // 根据发送的是文本还是二进制数据来对内容作处理
    send(data) {
        let opcode;
        let buffer;

        if (Buffer.isBuffer(data)) {
            opcode = OPCODES.BINARY;
            buffer = data;
        }
        else if (typeof data === 'string') {
            opcode = OPCODES.TEXT;
            buffer = Buffer.from(data, 'utf8');
        }
        else {
            console.error('暂不支持发送的数据类型')
        }

        this.doSend(opcode, buffer);
    }
    
    doSend(opcode, bufferDatafer) {
       this.socket.write(encodeMessage(opcode, bufferDatafer));
    }
}

module.exports = MyWebsocket;
