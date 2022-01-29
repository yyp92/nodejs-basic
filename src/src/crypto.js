// 加密

const crypto = require('crypto')

const password = 'abc123 456'

const hash = crypto
    .createHash('md5')
    // .createHash('sha1') // 算法
    .update(password, 'utf-8')
    .digest('hex')

console.log(hash);

