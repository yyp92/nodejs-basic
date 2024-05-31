/**
 * findUniqueOrThrow 和 findUnique 的区别是它如果没找到对应的记录会抛异常，而 findUnique 会返回 null。
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


// async function test2() {
//     const aaa = await prisma.aaa.findUnique({
//         where: {
//             id: 10
//         }
//     });
//     console.log(aaa);
// }

async function test2() {
    const aaa = await prisma.aaa.findUniqueOrThrow({
        where: {
            id: 10
        }
    });
    console.log(aaa);
}

test2();

test2();
