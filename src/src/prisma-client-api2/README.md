# Prisma Client 多表 CRUD 的全部 api


## 命令
```bash
# 创建个新项目
mkdir prisma-client-api2 
cd prisma-client-api2 
npm init -y

# 进入项目，执行 init 命令
npx prisma init

# 执行 migrate reset 重置下
npx prisma migrate reset

# 然后用 migrate dev 创建新的迁移
npx prisma migrate dev --name aaa

# 然后来写下 client 的 crud 代码
# 首先安装 ts、ts-node 包
npm install typescript ts-node @types/node --save-dev
# 创建 tsconfig.json
npx tsc --init

# 运行
npx ts-node ./src/index.ts
```
