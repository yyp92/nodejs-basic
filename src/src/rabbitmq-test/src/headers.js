import * as amqp from 'amqplib'

const connect = await amqp.connect(`amqp://localhost:5672`);
const channel = await connect.createChannel();

// headers 类型的 Exchange，这个不是根据 routing key 来匹配了，而是根据 headers
await channel.assertExchange('direct-test-exchange4', 'headers');

channel.publish('direct-test-exchange4', '',  Buffer.from('hello1'), {
    headers: {
        name: 'guang'
    }
});
channel.publish('direct-test-exchange4', '',  Buffer.from('hello2'), {
    headers: {
        name: 'guang'
    }
});
channel.publish('direct-test-exchange4', '',  Buffer.from('hello3'), {
    headers: {
        name: 'dong'
    }
});
