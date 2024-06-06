/**
 * * websocket 升级协议时候的 Sec-WebSocket-Key 对应的 Sec-WebSocket-Accept 的计算过程。
 */
const crypto = require('crypto');

/**
 * 也就是用客户端传过来的 key，加上一个固定的字符串，经过 sha1 加密之后，转成 base64 的结果。
 * 这个字符串 258EAFA5-E914-47DA-95CA-C5AB0DC85B11 是固定的
 */
function hashKey(key) {
    const sha1 = crypto.createHash('sha1');
    sha1.update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11');

    return sha1.digest('base64');
}