/**
 * node --inspect http.js --> 打开chrome 控制台调试
 * 
 * node --inspect --inspect-brk http.js --> 在chrome控制台调试nodejs
 */


const logger = require('../utils/log')
const http = require('http')
const https = requere('https')
const queryString = require('querystring')

const server = http.createServer((request, response) => {
    // logger.debug(request)
    // logger.debug(response)
    // debugger

    // response.writeHead(200, {
    //     // 默认：text/html
    //     // 'content-type': 'text/pain'
    //     // 'content-type': 'text/html'
    //     'content-type': 'application/json;charset=utf-8'
    // })
    // // response.write('home11')
    // // response.write('<div>hello</div>')
    // response.write('{"x": 100}')
    // response.end()


    // let data = ''
    // request.on('data', (chunk) => {
    //     data += chunk
    // })
    // request.on('end', () => {
    //     response.writeHead(200, {
    //         'content-type': 'application/json;charset=utf-8'
    //     })
    //     // logger.debug(data)
    //     response.write(JSON.stringify(queryString.parse(data)))
    //     response.end()
    // })


    https.get('https://www.xiaomiyoupin.com/mtop/mf/cat/list', (req) => {
        let data = ''
        
        req.on('data', (chunk) => {
            data += chunk
        })

        req.on('end', () => {
            response.writeHead(200, {
                'content-type': 'application/json;charset=utf-8'
            })
            response.write(data)
            response.end()
        })
    })
})

server.listen(8080, () => {
    console.log('localhost:8080')
})