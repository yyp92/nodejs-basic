// 路由

const http = require('http')
const fs = require('fs')
// 根据缀名获取返回类型
const mime = require('mime')

// const server = http.createServer((req, res) => {
//     const urlString = req.url

//     switch(urlString) {
//         case '/':
//             res.end('hello')
//             break

//         case '/home':
//             fs.readFile('./home.html', (err, content) => {
//                 res.end(content)
//             })
//             break

//         // js
//         case '/router-test.js':
//             fs.readFile('./router-test.js', (err, content) => {
//                 res.end(content)
//             })
//             break

//         // 图片
//         case '/images/test.jpeg':
//             fs.readFile('../../images/test.jpeg', (err, content) => {
//                 res.end(content)
//             })
//             break

//         default: 
//             res.end('page 404')
//     }
// })

const server = http.createServer((req, res) => {
    const urlString = req.url
    const type = mime.getType(urlString.split('.')[1])

    res.writeHead(200, {
        'content-type': type
    })

    const file = fs.readFileSync(`.${urlString}`)

    res.end(file)
})

server.listen(8080, () => {
    console.log('localhost:8080');
})