import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

async function test1() {
    await prisma.user.create({
        data: {
            name: 'guang',
            email: '111@gaung.com'
        }
    })

    await prisma.user.create({
        data: {
            name: 'dong',
            email: '222@dong.com'
        }
    })

    const users = await prisma.user.findMany()
    console.log(users)
}

test1()
