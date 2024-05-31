# Primsa Client 单表 CRUD 的全部 api


## 命令
```bash
# 创建个新项目
mkdir prisma-client-api
cd prisma-client-api
npm init -y

# 进入项目，执行 init 命令
npx prisma init

# 安装用到的 generator 包
npm install --save-dev prisma-docs-generator

# 执行 migrate reset 重置下
npx prisma migrate reset

# 用 migrate dev 创建新的迁移
npx prisma migrate dev --name aaa

# 首先安装 ts、ts-node 包
npm install typescript ts-node @types/node --save-dev

# 创建 tsconfig.json
npx tsc --init

# 在 package.json 配置下 seed 命令
"prisma": {
    "seed": "npx ts-node prisma/seed.ts"
}

# 执行 seed
npx prisma db seed
```




## 总结
过了一遍 Prisma Client 的单个表 CRUD 的 api。

分别包括 create、crateMany、update、updateMany、delete、deleteMany、findMany、findFirst、findFirstOrThrow、findUnique、findUniqueOrThrow。

以及 count、aggregate、groupBy 这些统计相关的。

其实有 sql 的基础的话，学习这些 api 很容易，过一遍就会了。
