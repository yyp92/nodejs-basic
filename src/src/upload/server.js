/**
 * 配合 react-components项目的 Upload 组件上传的后端接口
 */

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path')
const fs = require('fs')

const app = express()
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        try {
            fs.mkdirSync(path.join(process.cwd(), 'uploads'));
        }
        catch(e) {}

        cb(null, path.join(process.cwd(), 'uploads'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + '-' + file.originalname

        cb(null, uniqueSuffix)
    }
});

const upload = multer({ 
    dest: 'uploads/',
    storage
})

app.post('/upload', upload.single('file'), function (req, res, next) {
    console.log('req.file', req.file);
    console.log('req.body', req.body);

    res.end(JSON.stringify({
        message: 'success'
    }));
})

app.listen(3333);
