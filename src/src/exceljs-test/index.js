/**
 * * excel 解析
 */

const { Workbook } = require('exceljs');

//  workbook（工作簿） > worksheet（工作表） > row（行） > cell（列）这样的层级关系
async function main(){
    const workbook = new Workbook();

    // 工作簿
    const workbook2 = await workbook.xlsx.readFile('./data.xlsx');

    // 工作表
    workbook2.eachSheet((sheet, index1) => {
        console.log('工作表' + index1);

        // 行
        // sheet.eachRow((row, index2) => {
        //     const rowData = [];
    
        //     // 列
        //     row.eachCell((cell, index3) => {
        //         rowData.push(cell.value);
        //     });

        //     console.log('行' + index2, rowData);
        // })


        // 以直接调用 worksheet 的 getSheetValues 来拿到表格数据 
        const value = sheet.getSheetValues()
        console.log(value)
    })
}

main();