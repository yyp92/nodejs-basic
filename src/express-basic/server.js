const express = require('express')
const router = require('./router/index')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

// 静态资源服务中间件（内置中间件）
app.use(express.static('./public'))


// view engine setup
app.engine('art', require('express-art-template'));
// 注意此处和官网不一样
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production',
    // 是个坑，转化HTML5代码
    escape: false,
});
app.set('views', path.join(__dirname, './view'));
app.set('view engine', 'art');


app.use('/', router)

app.listen(8080, () => {
    console.log('localhost:8080');
})