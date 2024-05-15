/**
 * 通过随机数的方式生成压缩码
 */
const base62 = require("base62/lib/ascii");

function generateRandomStr(len) {
    let str = '';

    for (let i = 0; i < len; i++) {
        const num = Math.floor(Math.random() * 62);
        str += base62.encode(num);
    }

    return str;
}

console.log(generateRandomStr(6));