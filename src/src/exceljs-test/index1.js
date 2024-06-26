/**
 * excel 生成
 */

const { Workbook } = require('exceljs');

async function main(){
    const workbook = new Workbook();

    // 先 addWorkSheet
    const worksheet = workbook.addWorksheet('guang111');

    worksheet.columns = [
        {
            header: 'ID',
            key: 'id',
            width: 20
        },
        {
            header: '姓名',
            key: 'name',
            width: 30
        },
        {
            header: '出生日期',
            key: 'birthday',
            width: 30
        },
        { 
            header: '手机号',
            key: 'phone',
            width: 50
        }
    ];

    const data = [
        {
            id: 1,
            name: '光光',
            birthday: new Date('1994-07-07'),
            phone: '13255555555'
        },
        {
            id: 2,
            name: '东东',
            birthday: new Date('1994-04-14'),
            phone: '13222222222'
        },
        {
            id: 3,
            name: '小刚',
            birthday: new Date('1995-08-08'),
            phone: '13211111111'
        }
    ]

    // 然后 addRows
    worksheet.addRows(data);

    // 可以设置格式的，比如字体、背景色等
    worksheet.eachRow((row, rowIndex) => {
        row.eachCell(cell => {
            if (rowIndex === 1) {
                cell.style = {
                    font: {
                        size: 10,
                        bold: true,
                        color: {
                            argb: 'ffffff'
                        }
                    },
                    alignment: {
                        vertical: 'middle',
                        horizontal: 'center'
                    },
                    fill: {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: {
                            argb: '000000'
                        }
                    },
                    border: {
                        top: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        },
                        left: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        },
                        bottom: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        },
                        right: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        }
                    }
                }
            }
            else {
                cell.style = {
                    font: {
                        size: 10,
                        bold: true,
                    },
                    alignment: {
                        vertical: 'middle',
                        horizontal: 'left'
                    },
                    border: {
                        top: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        },
                        left: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        },
                        bottom: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        },
                        right: {
                            style: 'dashed',
                            color: {
                                argb: '0000ff'
                            }
                        }
                    }
                }
            }
        })
    })

    workbook.xlsx.writeFile('./data2.xlsx');    
}

main();
