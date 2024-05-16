const OSS = require('ali-oss')

const client = new OSS({
    region: 'oss-cn-beijing',
    bucket: 'peng-2',
    accessKeyId: '',
    accessKeySecret: '',
});


// 上传
async function put () {
    try {
        const result = await client.put('1-1.jpg', './1.jpg');
        console.log(result);
    }
    catch (e) {
        console.log(e);
    }
}
// put();


// 下载
async function get() {
    await client.get('1-1.jpg', '11.jpg')
}
get()
