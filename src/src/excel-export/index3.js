/**
 * * 改完之后要用这个 excel 文件生成 en-US.json 和 zh-CN.json 在项目里引入用
 * 解析也是按照 workbook（工作簿） > worksheet（工作表）> row （行）的层次，调用 eachSheet、eachRow、eachCell 就好了。
 */

const { Workbook } = require('exceljs');
const fs = require('fs');


async function main(){
    const workbook = new Workbook();

    const workbook2 = await workbook.xlsx.readFile('./bundle.xlsx');

    const zhCNBundle = {};
    const enUSBundle = {};

    workbook2.eachSheet((sheet, index1) => {
        // console.log('工作表' + index1);

        sheet.eachRow((row, index) => {
            if (index === 1) {
                return;
            }

            const key = row.getCell(1).value;
            const zhCNValue = row.getCell(4).value;
            const enUSValue = row.getCell(5).value;

            zhCNBundle[key] = zhCNValue;
            enUSBundle[key] = enUSValue;



            // const rowData = [];
    
            // row.eachCell((cell, index3) => {
            //     rowData.push(cell.value);
            // });

            // console.log('行' + index2, rowData);

            console.log(zhCNBundle);
            console.log(enUSBundle);
            fs.writeFileSync('zh-CN.json', JSON.stringify(zhCNBundle, null, 2));
            fs.writeFileSync('en-US.json', JSON.stringify(enUSBundle, null, 2));

        })
    })
}

main();
