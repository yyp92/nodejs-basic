/**
 * create 用来创建记录
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

async  function test5() {
    const res = await prisma.aaa.create({
        data: {
            name: 'kk',
            email: 'kk@xx.com'
        },
        select: {
            email: true
        }
    });
    console.log(res);
}
test5();