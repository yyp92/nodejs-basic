const net = require('net')

// const server = net.createServer((socket) => {
//     // 返给客户端
//     socket.write('hello')
//     // socket.end('goodbye\n');

//     // 客户端返给服务端的数据
//     socket.on('data', (chunk) => {
//         console.log(chunk.toString());
//     })
// })
// .on('error', (err) => {
//     // 在这里处理错误。
//     throw err;
// });
  
// // 获取任意未使用的端口。
// server.listen('6527', () => {
//     console.log('opened server on', server.address());
// });


// 聊天功能
const server = new net.createServer()

const clients = {}
let cliendName = 0

server.on('connection', (client) => {
    client.name = ++ cliendName
    clients[client.name] = client

    client.on('data', (msg) => {
        broadcast(client, msg.toString())
    })

    client.on('error', (e) => {
        console.log('client error: ', e);
        client.end()
    })

    client.on('close', (data) => {
        delete clients[client.name]
        console.log(client.name + ' 下线了');
    })
})

function broadcast(client, msg) {
    for (let key in clients) {
        clients[key].write(client.name + ' 说：' + msg)
    }
}

server.listen(9000, 'localhost')
  