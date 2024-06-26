/**
 * * oss 授权给第三方上传
 * 
 */
const OSS = require('ali-oss')

async function main() {
    const config = {
        region: 'oss-cn-beijing',
        bucket: 'peng-2',

        // 可以去阿里云的官网 - 创建完用户记得保存一下
        accessKeyId: '',
        accessKeySecret: '',
    }

    const client = new OSS(config);
    
    const date = new Date();
    
    date.setDate(date.getDate() + 1);
    
    const res = client.calculatePostSignature({
        expiration: date.toISOString(),
        conditions: [
            // 设置上传文件的大小限制
            ["content-length-range", 0, 1048576000],       
        ]
    });
    
    console.log(res);
    
    const location = await client.getBucketLocation();
    
    const host = `http://${config.bucket}.${location.location}.aliyuncs.com`;

    console.log(host);
}

main();



