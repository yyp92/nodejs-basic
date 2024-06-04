import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query'
        },
    ],
});

// 如果是某个 id 的数据存在就 connect，不存在就 create 呢
async function test6() {
    const res1 = await prisma.department.update({
        where: {
            id: 1
        },
        data: {
            name: '销售部',
            employees: {
                connectOrCreate: {
                    where: {
                        id: 6
                    },
                    create: {
                        id: 6,
                        name: '小张',
                        phone: '13256665555'
                    }
                }
            }
        }
    });
    console.log(res1);
}
test6();



