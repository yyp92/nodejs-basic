const express = require('express')

// 路由中间件
const router = express.Router()
const {list, token} = require('../controller')

// 获取数据
// router.get('/', list)
router.get('/api/list', list)
// router.get('/index', (req, res, next) => {
//     // res.send('index page')

//     const query = req.query
//     res.send(query)
// })

// 添加数据
// router.post('/index', (req, res, next) => {
//     const data = req.body
//     console.log('data', data)

//     res.send(data)
// })

// 修改数据-覆盖式修改
// router.put('/index', (req, res, next) => {
//     const data = req.body
//     console.log('data', data)

//     res.send('put response')
// })

// 修改数据-增量修改
// router.patch('/index', (req, res, next) => {
//     const data = req.body
//     console.log('data', data)
    
//     res.send('patch response')
// })

// 删除数据
// router.delete('/index', (req, res, next) => {
//     const data = req.body
//     console.log('data', data)
    
//     res.send('delete response')
// })

router.get('/api/token', token)

module.exports = router