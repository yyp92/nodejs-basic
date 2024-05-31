import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [
        {
            emit: 'stdout',
            level: 'query'
        },
    ],
})

// 更新
// async function test3() {
//     await prisma.post.update({
//         where: {
//             id: 2
//         },
//         data: {
//             content: 'xxx'
//         }
//     })
// }
// test3();



// 删除
async function test4() {
    await prisma.post.delete({
        where: {
            id: 2
        }
    })
}
test4()
