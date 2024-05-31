/**
 * groupBy 方法，大家有 sql 基础也很容易搞懂，这个就是分组的
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

async function test13() {
    // 就是按照 email 分组，过滤出平均年龄大于 2 的分组，计算年龄总和返回
    const res = await prisma.aaa.groupBy({
        by: ['email'],
        _count: {
            _all: true
        },
        _sum: {
            age: true,
        },
        having: {
            age: {
                _avg: {
                    gt: 2,
                }
            },
        },
    })
    console.log(res);
}

test13();

