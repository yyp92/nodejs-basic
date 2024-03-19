const socket = require('nodejs-websocket')

socket.createServer(function(connect) {
    connect.on('text', (str) => {
        connect.sendText(str)
    })
}).listen(8080)