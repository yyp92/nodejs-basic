/**
 * udpateMany 更新多条
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

async function test7() {
    const res = await prisma.aaa.updateMany({
        where: { 
            email: {
                contains: 'xx.com'
            } 
        },
        data: { name: '666' },
    });
    console.log(res);
}

test7();