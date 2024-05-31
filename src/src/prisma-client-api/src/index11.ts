/**
 * aggregate 是统计相关的。
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

async function test11() {
    await prisma.aaa.update({
        where: {
            id: 3
        },
        data: {
            age: 3
        }
    });

    await prisma.aaa.update({
        where: {
            id: 5
        },
        data: {
            age: 5
        }
    });
}
test11();
