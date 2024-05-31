/**
 * findFirst 和 findMany 的唯一区别是，这个返回第一条记录。
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

async  function test4() {
    const res = await prisma.aaa.findFirst({
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
test4();
