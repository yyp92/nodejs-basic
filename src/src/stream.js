/**
 * 流的操作
 * 读流/写流
 */

const fs = require('fs')
const zlib = require('zlib')

// 压缩
const gzip = zlib.createGzip()

const readStream = fs.createReadStream('./logs/log.txt')
// const writeStream = fs.createWriteStream('./logs/log1.txt')
const writeStream = fs.createWriteStream('./logs/log2.gzip')

readStream
    .pipe(gzip)
    .pipe(writeStream)