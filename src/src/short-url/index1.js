const data = '123456';
const buff = Buffer.from(data);

// base64 就是 26 个大写字母、26 个小写字母、10 个数字、2 个特殊字符，一共 64 个字符。
// 而 base62 则是去掉了两个特殊字符，一共 62 个字符。
const base64data = buff.toString('base64');

console.log(base64data);