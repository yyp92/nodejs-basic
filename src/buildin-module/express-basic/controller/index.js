const template = require('art-template');
const path = require('path')
const fs = require('fs')
const listModel = require('../model/list')

const list = (req, res, next) => {
    // let data = '<ul>'
    // for (var i = 0; i < 100; i++) {
    //     data += `<li>line ${i}</li>`
    // }
    // data += '</ul>'

    // 客户端渲染
    // let dataObj = {
    //     ret: true,
    //     data: []
    // }

    // for (var i = 0; i < 100; i++) {
    //     dataObj.data.push(`line ${i}`)
    // }

    // const dataArr = []
    // for (var i = 0; i < 200; i++) {
    //     dataArr.push(`line ${i}`)
    // }

    // 设置请求头
    // res.set('content-type', 'application/json; charset=utf-8')

    // 第一个参数： 模板的名字，第二个参数：模板的数据
    // res.render('list', {
    //     data: JSON.stringify(dataArr)
    // })

    // 服务端渲染
    // res.render('list-html', {
    //     data: dataArr
    // })

    const html = template(path.join(__dirname, '../view/list-html.art'), {
        data: listModel.dataArr
    });

    fs.writeFileSync(path.join(__dirname, '../public/list.html'), html)

    console.log('html', html)

    res.send('pages has been compiled.')

    // res.send(dataArr)
    // res.send('hello')
}

exports.list = list