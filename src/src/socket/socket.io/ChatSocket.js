const {instrument} = require('@socket.io/admin-ui')
const io = require('socket.io')(5000, {
    // 一些跨域的配置
    cors: {
        origin: [
            'http://127.0.0.1:5173',
            'http://127.0.0.1',
            'http://localhost:5173',
            'http://localhost:5000',
            'http://localhost',
            'https://admin.socket.io',
        ],
        methods: ["GET", "POST"],
        // allowedHeaders: ['my-custom-header'],

        // credentials: true 表示允许跨域请求携带身份凭证
        credentials: true
    }
})

const helper = {
    printSystemInfo: () => {
        console.log(`engine client count #${io.engine.clientsCount}`)
        console.log(`socketd count #${io.of("/").sockets.size} under "/" namespace`)
    },
    printRoomInfo: async (room) => {
        console.log(`sockets count #${(await io.in(room).fetchSockets())?.length} in "${room}"`)
    }
}

io.on('connection', socket => {
    console.log(`${socket.id} connected!`)
    helper.printSystemInfo()

    socket.on('cxt-event-a', (n, s, obj) => {
        console.log('on cxt-event-a', n, s, obj)
    })

    socket.on('cxt-client-msg-2-all', (msg, room) => {
        console.log(`on cxt-client-msg-2-all ${!room ? '' : `to the room #[${room}]`}`, msg)

        io.emit('cxt-client-msg', {
            msg,
            from: socket.id
        })
    })

    socket.on('cxt-client-msg-2-others', (msg, room) => {
        console.log(`cxt-client-msg-2-others ${!room ? '' : `to the room #[${room}]`}`, msg)

        if (!!room) {
            socket
                .to(room)
                .emit('cxt-client-msg', {msg, from: socket.id})
        }
        else {
            socket.broadcast.emit('cxt-client-msg', {msg, from: socket.id})
        }
    })

    socket.on('cxt-client-join-room', (room, cbResponse) => {
        console.log(`on cxt-client-join-room`, room)

        socket.join(room)

        if (!!cbResponse) {
            cbResponse(`You are now joined the room [${room}]!`)
        }

        helper.printRoomInfo(room)
    })

    socket.on('cxt-client-leave-room', (room) => {
        console.log(`on cxt-client-leave-room`, room)

        socket.leave(room)
        helper.printRoomInfo(room)
    })

    socket.on('cxt-client-ping', n => console.log(n))

    socket.on('disconnect', (reason) => {
        console.log(`${socket.id} disconnect`, reason)

        helper.printSystemInfo()
    })
})

// 创建命名空间
// const ioUser = io.of('/namespace')
// ioUser.on('connection', socket => {
//     console.log(`Hello ${socket.username}, your #${socket.id} socket connected to user`)
// })

// ioUser.use((socket, next) => {
//     console.log(socket.handshake.auth?.token)

//     if (!!socket.handshake.auth?.token) {
//         // 这里可以根据需要添加相关信息
//         socket.username = 'xiaoming'
//         next()
//     }
//     else {
//         next(new Error('Please provie your auth info!!!'))
//     }
// })


/**
 * * 管理后台
 * 
 * Web Page Url: https://admin.socket.io
 * 
 * Connection 
 * Server Url: http://localhost:5000/admin
 * 
 * Notes 
 * close local proxy & VPN
 */
instrument(io, {
    // 去掉校验
    auth: false
})
