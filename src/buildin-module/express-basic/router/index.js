const express = require('express')

// 路由中间件
const router = express.Router()

router.get('/index', (req, res, next) => {
    // res.send('index page')

    const query = req.query
    res.send(query)
})

router.post('/index', (req, res, next) => {
    const data = req.body
    console.log('data', data)

    res.send(data)
})

module.exports = router