import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query'
        },
    ],
});

async function test1() {
    await prisma.department.create({
        data: {
            name: '技术部',
            employees: {
                // 插入关联 model 的数据的时候，也是用 create 指定
                create: [
                    {
                        name: '小张',
                        phone: '13333333333'
                    },
                    {
                        name: '小李',
                        phone: '13222222222'
                    }
                ]
            }
        }
    })
}

test1();
