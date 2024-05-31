/**
 * upsert 是 update 和 insert 的意思。
 * 当传入的 id 有对应记录的时候，会更新，否则，会创建记录
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query'
        },
    ],
});

async function test8() {
    const res = await prisma.aaa.upsert({
        where: { id: 11 },
        update: { email: 'yy@xx.com' },
        create: { 
            id:  11,
            name: 'xxx',
            email: 'xxx@xx.com'
        },
    });
    console.log(res);
}

test8();
