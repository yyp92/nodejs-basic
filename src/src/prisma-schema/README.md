# Prisma 的全部 schema 语法


## 命令
```bash
# 创建个新项目
mkdir prisma-schema
cd prisma-schema
npm init -y

# 全局安装 prisma
npm install -g prisma

# 然后进入项目，执行 init 命令
prisma init

# 这个 json 和 docs 的 generator
# 先安装相关的包
npm install --save-dev prisma-docs-generator
npm install --save-dev prisma-json-schema-generator

# 注意，这里要用 npx 执行，因为如果是执行全局命令，会找不到项目目录下安装的 generator。
npx prisma generate

# 运行
npx http-server ./generated/docs
```




## 总结
这节我们学习了 prisma schema 的常用语法。

generator 部分可以指定多种生成器，比如生成 json 生成 docs 等，可以指定生成代码的位置。

datasource 是配置数据库的类型和连接 url 的。

model 部分定义和数据库表的对应关系：
- @id 定义主键
- @default 定义默认值
- @map 定义字段在数据库中的名字
- @db.xx 定义对应的具体类型
- @updatedAt 定义更新时间的列
- @unique 添加唯一约束
- @relation 定义外键引用
- @@map 定义表在数据库中的名字
- @@index 定义索引
- @@id 定义联合主键
此外，还可以通过 enum 来创建枚举类型。




## 资料
- [prisma 文档](https://www.prisma.io/docs/orm/prisma-schema/overview/generators#community-generators)
