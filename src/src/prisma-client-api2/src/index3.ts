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
    const res1 = await prisma.department.findUnique({
        where: {
            id: 1
        },
        include: {
            employees: true
        }
    });
    console.log(res1);

    const res2 = await prisma.department.findUnique({
        where: {
            id: 1
        },
        include: {
            employees: {
                where: {
                    name: '小张'
                },
                select: {
                    name: true
                }
            }
        }
    });
    console.log(res2);

    const res3 = await prisma.department.findUnique({
        where: {
            id: 1
        }
    }).employees();
    console.log(res3);
}

test3();
