/**
 * 操作文件系统
 * 
 * 回调函数是错误优先
 */

const fs = require('fs')
const fsPromise = require('fs').promises

// 创建文件夹
// fs.mkdir('logs', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('文件夹创建成功');
// })


/**
 * 文件夹操作
 * 修改文件夹名字
 * 1: 目标文件夹
 * 2: 修改后的文件夹
 * 3: 回调
 */
// fs.rename('./logs', './log', (err) => {
//     if (err) {
//         throw err
//     }

//     console.log('文件夹名字修改成功');
// })


// 删除文件夹
// fs.rmdir('./log', () => {
//     console.log('done')
// })


// 读取文件夹
// fs.readdir('./logs', (err, result) => {
//     console.log('result', result)
// })



/**
 * 文件操作
 */
// 创建文件
// fs.writeFile('./logs/log1.log', 'hello\nworld', (err) => {
//     console.log('done.');
// })


// 修改
// fs.appendFile('./logs/log1.log', '!!!', (err) => {
//     console.log('done.');
// })


// 删除
// fs.unlink('./logs/log1.log', (err) => {
//     console.log('done.');
// })


/**
 * 读取文件
 * 因为读取的content是数据流，所以得处理
 * 
 * 方法一：增加第二个参数，读取的格式，如：utf-8
 * 方法一：转成字符串
 */
// fs.readFile('./logs/log1.log', 'utf-8', (err, content) => {
//     // content --> 数据流
//     console.log(content);
// })

// fs.readFile('./logs/log1.log', (err, content) => {
//     // content --> 数据流
//     console.log(content.toString());
// })



/**
 * 同步、异步问题
 */
// 异步
// fs.readFile('./logs/log1.log', (err, content) => {
//     // content --> 数据流
//     console.log(content.toString());
// })
// console.log('continue...');
// continue...
// hello
// world

// 同步
// const content = fs.readFileSync('./logs/log1.log')
// console.log(content.toString())
// console.log('continue...');
// hello
// world
// continue...




// promise nodejs >= 10
// ;(async () => {
//     let result = await fsPromise.readFile('./logs/log1.log')
//     console.log(result.toString())
// })()


// 批量创建文件
// for (var i = 0; i < 10; i++) {
//     fs.writeFile(`./logs/log-${i}.log`, `log-${i}`, (err) => {
//         console.log('done.');
//     })
// }


// 遍历文件
// const readDir = (dir = './') => {
//     fs.readdir(dir, (err, content) => {
//         // if (Array.isArray(content)) {
//             content.forEach((value, index) => {
//                 const newDir = `${dir}/${value}`

//                 fs.stat(newDir, (err, stats) => {
//                     if (stats.isDirectory()) {
//                         readDir(newDir)
//                     }
//                     else {
//                         fs.readFile(newDir, 'utf-8', (err, text) => {
//                             console.log(text);
//                         })
//                     }
//                 })
//             })
//         // }
//     })
// }
// readDir('./logs')


// watch 方法
// fs.watch('./logs/log-0.log', (err) => {
//     console.log('file has changed');
// })

