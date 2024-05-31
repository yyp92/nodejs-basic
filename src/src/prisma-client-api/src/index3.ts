/**
 * findMany 很明显是查找多条记录的
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

async function test3() {
    const res = await prisma.aaa.findMany({
        where: {
            email: {
                contains: 'xx'
            }
        },
        select: {
            id: true,
            email: true,
        },
        orderBy: {
            name: 'desc'
        },
        skip: 2,
        take: 3
    });
    console.log(res);
}

test3();
