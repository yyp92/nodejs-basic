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

async function test12() {
    const res = await prisma.aaa.aggregate({
        where: {
            email: {
                contains: 'xx.com'
            }
        },
        _count: {
            _all: true,
        },
        _max: {
            age: true
        },
        _min: {
            age: true
        },
        _avg: {
            age: true
        }
    });
    console.log(res);
}
test12();
