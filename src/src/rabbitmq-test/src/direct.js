import * as amqp from 'amqplib'

const connect = await amqp.connect(`amqp://localhost:5672`);
const channel = await connect.createChannel();

// 创建一个 exchange，然后调用 publish 往这个 exchange 发消息。
// 其中第二个参数是 routing key，也就是消息路由到哪个队列
await channel.assertExchange('direct-test-exchange', 'direct');

channel.publish('direct-test-exchange', 'aaa',  Buffer.from('hello1'));
channel.publish('direct-test-exchange', 'bbb',  Buffer.from('hello2'));
channel.publish('direct-test-exchange', 'ccc',  Buffer.from('hello3'));
