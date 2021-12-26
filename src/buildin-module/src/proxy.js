/**
 * proxy - 代理跨域
 */

const http = require('http')
// const url = require('url')
const {createProxyMiddleware} = require('http-proxy-middleware')

const server = http.createServer((req, res) => {
    const urlStr = req.url

    if (/\/ajax/.test(urlStr)) {
        const proxy = createProxyMiddleware('/ajax', {
            target: 'https://lady.vip.com',
            changeOrigin: true
        })

        // 代理返回回去
        proxy(req, res)
    }
    else if (/\/api/.test(urlStr)) {
        const proxy2 = createProxyMiddleware('/api', {
            target: 'https://m.lagou.com',
            changeOrigin: true,

            // 重写地址
            pathRewrite: {
                '^/api': ''
            }
        })

        // 代理返回回去
        proxy2(req, res)
    }
    else {
        console.log('error');
    }
})

server.listen(8080, () => {
    console.log('localhost:8080')
})