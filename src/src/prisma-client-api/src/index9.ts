/**
 * delete 就比较简单了，我们和 deleteMany 一起测试下
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

async function test9() {
    await prisma.aaa.delete({
        where: { id: 1 },
    });

    await prisma.aaa.deleteMany({
        where: {
            id: {
                in: [11, 2]
            }
        }
    });
}

test9();
