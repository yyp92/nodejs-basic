/**
 * * oss 简单上传
 * 
 */
const OSS = require('ali-oss')

const client = new OSS({
    region: 'oss-cn-beijing',
    bucket: 'peng-2',

    // 可以去阿里云的官网 - 创建完用户记得保存一下
    accessKeyId: '',
    accessKeySecret: '',
})

async function put () {
    try {
        const result = await client.put('cat.png', './imgs/mao.png');
        console.log(result)
    }
    catch (e) {
        console.log(e)
    }
}

put()

