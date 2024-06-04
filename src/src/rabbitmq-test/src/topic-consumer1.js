import * as amqp from 'amqplib'

const connect = await amqp.connect(`amqp://localhost:5672`);
const channel = await connect.createChannel();

await channel.assertExchange('direct-test-exchange2', 'topic');

const { queue } = await channel.assertQueue('queue1');
// 指定路由 key 分别为 aaa.* 和 bbb.*，这里的 * 是模糊匹配的意思
await channel.bindQueue(queue,  'direct-test-exchange2', 'aaa.*');

channel.consume(queue, msg => {
    console.log(msg.content.toString())
}, { noAck: true });
