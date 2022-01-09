const express = require('express')

const app = express()

// 中间件
// app.use 至上而下执行
// app.use('/', (req, res) => {
//     res.send('hello')
// })

const middlewares = [
    (req, res, next) => {
        console.log(0)
        next()
        // res.send('hello')
    }, (req, res, next) => {
        console.log(1)
        next()
    }, (req, res, next) => {
        console.log(2)
        next()
    }
]

/**
 * 回调函数又称为中间件
 * 可以绑定多个中间件
 * 
 * 中间件栈
 */
// app.use('/', (req, res, next) => {
//     console.log(0)
//     next()
//     // res.send('hello')
// }, (req, res, next) => {
//     console.log(1)
//     next()
// }, (req, res) => {
//     console.log(2)
// })
app.use('/', middlewares)

app.use('/api', (req, res) => {
    res.send('world')
})

app.listen(8080, () => {
    console.log('localhost:8080');
})
