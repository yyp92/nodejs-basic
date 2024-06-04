import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query'
        },
    ],
});

// 如果我们想删除 id 为 1 的 department 的所有 empolyee
async function test7() {
    await prisma.employee.deleteMany({
        where: {
            department: {
                id: 1
            }
        },
    });
}
test7();




