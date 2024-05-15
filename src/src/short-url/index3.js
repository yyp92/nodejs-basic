/**
 * hash 的方案也不行
 */
const crypto = require('crypto');

function md5(str) {
    const hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
}

console.log(md5('111222'))