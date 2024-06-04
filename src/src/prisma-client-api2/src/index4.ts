import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query'
        },
    ],
});

async function test4() {
    const res1 = await prisma.department.update({
        where: {
            id: 1
        },
        data: {
            name: '销售部',
            employees: {
                create: [
                    {
                        name: '小刘',
                        phone: '13266666666'
                    }
                ]
            }
        }
    });
    console.log(res1);
}

test4();

