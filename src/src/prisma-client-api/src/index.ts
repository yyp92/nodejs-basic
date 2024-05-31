import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query'
        },
    ],
})

async function test1() {
    const aaa = await prisma.aaa.findUnique({
        where: {
            id: 1
        }
    })
    console.log(aaa)

    const bbb = await prisma.aaa.findUnique({
        where: {
            email: 'bbb@xx.com'
        },
        select: {
            id: true,
            email: true
        }
    })
    console.log(bbb)
}

test1();
