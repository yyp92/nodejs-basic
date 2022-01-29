const path = require('path')
const mime = require('mime')
const fs = require('fs')

// 处理文件夹下的默认文件
function myReadFile(file) {
    // 异步
    // fs.readFile(file, (err, data) => {
    //     if (err) {
    //         // res.end('error')
    //         return '你访问的是一个文件夹，且文件夹里没有index.html'
    //     }
    //     else {
    //         return data
    //     }
    // })

    // 简单封装一下
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            if (err) {
                // reject('你访问的是一个文件夹，且文件夹里没有index.html')
                resolve('你访问的是一个文件夹，且文件夹里没有index.html')
            }
            else {
                resolve(data)
            }
        })
    })
}

async function readStaticFile(filePathName) {
    // 获取文件扩展名
    const ext = path.parse(filePathName).ext
    const mimeType = mime.getType(ext) || 'text/html'
    let data

    // 判断文件是否存在
    if (fs.existsSync(filePathName)) {
        // 是文件
        if (ext) {
            // data = myReadFile(filePathName)

            // myReadFile(filePathName)
            //     .then(result => {
            //         data = result
            //     })
            //     .catch((err) => {
            //         data = err
            //     })

            data = await myReadFile(filePathName)
        }
        // 是文件夹
        else {
            // data = myReadFile(path.join(filePathName, './index.html'))

            // myReadFile(path.join(filePathName, './index.html'))
            //     .then(result => {
            //         data = result
            //     })
            //     .catch((err) => {
            //         data = err
            //     })

            data = await myReadFile(path.join(filePathName, './index.html'))
        }
    }
    else {
        data = 'file not found'
    }

    return {
        mimeType,
        data
    }
}

module.exports = readStaticFile