const net = require('net');

// const client = net.createConnection({ port: 9000 }, () => {
//     // 'connect' 监听器。
//     console.log('connected to server!');
//     client.write('world!\r\n');
// });

// client.on('data', (data) => {
//     console.log(data.toString());
//     // client.end();
// });

// client.on('end', () => {
//     console.log('disconnected from server');
// });


const readline = require('readline')

let port = 9000
let host = '127.0.0.1'

let socket = new net.Socket()

socket.setEncoding = 'UTF-8'

socket.connect(port, host, () => {
    socket.write('hello.')
})

socket.on('data', (msg) => {
    console.log(msg.toString());
    say()
})

socket.on('error', (err) => {
    console.log('error: ' + err);
})

socket.on('close', () => {
    console.log('connection closed');
})

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function say() {
    r1.question('请输入：\n', (inputMsg) => {
        if (inputMsg !== 'bye') {
            socket.write(inputMsg + '\n')
        }
        else {
            socket.destroy()
            r1.close()
        }
    })
}
