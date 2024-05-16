var Minio = require('minio')
const fs = require('fs');

var minioClient = new Minio.Client({
    endPoint: 'localhost',
    port: 9000,
    useSSL: false,
    accessKey: '',
    secretKey: '',
})


// 上传
function put() {
    minioClient.fPutObject('aaa', '2-2.jpg', './2.jpg', function (err, etag) {
        if (err) return console.log(err)
        console.log('上传成功');
    });
}
// put();



// 下载
function get() {
    minioClient.getObject('aaa', '2-2.jpg', (err, stream) => {
        if (err) return console.log(err)

        stream.pipe(fs.createWriteStream('./22.jpg'));
    });
}
get();
