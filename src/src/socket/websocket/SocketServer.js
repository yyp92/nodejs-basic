// websocket npm库
const WebSocket = require('ws') ;

const wss = new WebSocket.Server({ port: 9000 });

wss.on('connection', function connection(ws) {
    ws.on('open', () => {
        console.log('connected')
        ws.send('hello')
    })

    ws.on('message', function message(data) {
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(data.toString());
            }
        });
    });

    ws.on('close', () => {
        console.log('disconnected');
    })
});