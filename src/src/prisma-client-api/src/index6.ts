/**
 * update 明显是用来更新的。
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

async function test6() {
    const res = await prisma.aaa.update({
        where: { id: 3 },
        data: { email: '3333@xx.com' },
        select: {
            id: true,
            email: true
        }
    });
    console.log(res);
}

test6();
