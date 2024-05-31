# Prisma 的全部命令


## 命令
```bash
# 创建个新项目
mkdir prisma-all-command
cd prisma-all-command
npm init -y

# 全局安装 prisma，这个是命令行工具的包
npm install -g prisma
```




## Prisma 的全部命令
```bash
npx prisma -h

# 用 ts 来写，先安装相关依赖
npm install typescript ts-node @types/node --save-dev

# 创建 tsconfig.json
npx tsc --init
```


### 全部命令
- init：创建 schema 文件
- generate：根据 shcema 文件生成 client 代码，他并不会同步数据库
- db：同步数据库和 schema
- migrate：生成数据表结构更新的 sql 文件
- studio：用于 CRUD 的图形化界面
- validate：检查 schema 文件的语法错误
- format：格式化 schema 文件
- version：版本信息

#### prisma db 
-  prisma db pull
-  prisma db push
-  prisma db seed
-  prisma db execute --file prisma/test.sql --schema prisma/schema.prisma
    - --file 就是指定 sql 文件的
    - --schema 指定 schema 文件，主要是从中拿到数据库连接信息


#### prisma migrate
```bash
# 它会根据 schema 的变化生成 sql 文件，并执行这个 sql，还会生成 client 代码
prisma migrate dev --name init

prisma migrate dev --name age-field
```




## 总结
这节我们学习了 prisma 的全部命令：
- init：创建 schema 文件
- generate： 根据 shcema 文件生成 client 代码
- db：同步数据库和 schema
- migrate：生成数据表结构更新的 sql 文件
- studio：用于 CRUD 的图形化界面
- validate：检查 schema 文件的语法错误
- format：格式化 schema 文件
- version：版本信息

其中，prisma init、prisma migrate dev 是最常用的。

prisma db pull、prisma db push 也可以方便的用来做 schema 和数据库的同步。



