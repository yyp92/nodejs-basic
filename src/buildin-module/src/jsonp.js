const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const urlStr = req.url
    const urlObj = url.parse(urlStr, true)

    console.log(urlObj)

    switch(urlObj.pathname) {
        case '/api/data': 
            // res.write('hello')
            // res.write('getData("hello")')
            res.write(`${urlObj.query.cb}("hello")`)
            break

        default:
            res.write('page not found')
    }

    res.end()
})

server.listen(8080, () => {
    console.log('localhost:8080')
})