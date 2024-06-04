import * as amqp from 'amqplib'

const connect = await amqp.connect(`amqp://localhost:5672`);
const channel = await connect.createChannel();



// 1
// assertQueue 是如果没有就创建队列，有的话就直接返回
// const { queue } = await channel.assertQueue('aaa');
// channel.consume(
//     queue,
//     msg => {
//         console.log(msg.content.toString())
//     },
//     { noAck: true }
// );





// 2
const { queue } = await channel.assertQueue('aaa');
// 设置了 prefetch 为 3，也就是每次最多取回 3 条消息来处理
channel.prefetch(3);

const currentTask = [];
channel.consume(
    queue,
    msg => {
        currentTask.push(msg);
        console.log('收到消息：', msg.content.toString());
    },
    // 把 noAck 设置为 false 了，也就是不自动确认
    { noAck: false }
);

setInterval(() => {
    const curMsg = currentTask.pop();
    channel.ack(curMsg);
}, 1000);
