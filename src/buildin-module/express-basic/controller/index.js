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

    const dataArr = []
    for (var i = 0; i < 100; i++) {
        dataArr.push(`line ${i}`)
    }

    // 设置请求头
    res.header('Content-Type', 'application/json; charset=utf-8')

    // 第一个参数： 模板的名字，第二个参数：模板的数据
    res.render('list', {
        data: JSON.stringify(dataArr)
    })

    // res.send(dataArr)
    // res.send('hello')
}

exports.list = list