/**
 * count 其实和 findMany 参数一样，只不过这里不返回具体记录，而是返回记录的条数。
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

// async function test10() {
//     const res = await prisma.aaa.findMany({
//         where: {
//             email: {
//                 contains: 'xx'
//             }
//         },
//         orderBy: {
//             name: 'desc'
//         },
//         skip: 2,
//         take: 3
//     });
//     console.log(res);
// }

async function test10() {
    const res = await prisma.aaa.count({
        where: {
            email: {
                contains: 'xx'
            }
        },
        orderBy: {
            name: 'desc'
        },
        skip: 2,
        take: 3
    });
    console.log(res);
}

test10();
