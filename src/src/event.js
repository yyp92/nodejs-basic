/**
 * 事件机制
 */

const EventEmitter = require('events')

class MyEventEmitter extends EventEmitter {

}

const event = new MyEventEmitter()

// 绑定事件
event.on('play', (value) => {
    console.log(value)
})

// 触发事件
event.emit('play', 'move')
