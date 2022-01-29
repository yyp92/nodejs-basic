const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('./static/public'))

app.get('/', (req, res) => {
    res.send('hello')
//   res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('receive', (data) => {
    //   console.log('data', data)
    socket.broadcast.emit('message', data)
  })
});

server.listen(3000, '10.2.96.240', () => {
  console.log('listening on *:3000');
});