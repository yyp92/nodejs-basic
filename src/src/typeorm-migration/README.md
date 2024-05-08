# 为什么生产环境要用 TypeORM 的 migration 迁移功能

## 命令
```bash
# 新建一个 TypeORM 项目
npx typeorm@latest init --name typeorm-migration --database mysql

# 安装用到的 mysql2
npm install --save mysql2

# 执行 migration:create 的命令
npx typeorm-ts-node-esm migration:create ./src/migration/Aaa


# 用 migration:generate 来生成
npx typeorm-ts-node-esm migration:generate ./src/migration/Aaa -d ./src/data-source.ts

# 用 migration:run 执行下
npx typeorm-ts-node-esm migration:run -d ./src/data-source.ts

# 可以跑 migration 也同样可以撤销
# 执行 migration:revert 会执行上次的 migration 的 down 方法，并且从 migrations 表里删掉执行记录。
npx typeorm-ts-node-esm migration:revert -d ./src/data-source.ts
```



## 总结
开发环境我们会用 synchronize 来同步 Entity 和数据库表，它会自动执行 create table、alter table，不用手动修改表结构，很方便。

但是它并不安全，因为很容易丢失数据。所以生产环境下我们会把它关掉，用 migration 来管理。

migration 就是把 create table、alter table 等封装成一个个的 migration，可以一步步执行、也可以一步步撤销回去。

有 4 个常用命令：
- migration:create：生成空白 migration 文件
- migration:generate：连接数据库，根据 Entity 和数据库表的差异，生成 migration 文件
- migration:run：执行 migration，会根据数据库 migrations 表的记录来确定执行哪个
- migration:revert：撤销上次 migration，删掉数据库 migrations 里的上次执行记录

这样就把生产环境里的建表和修改表的操作管理了起来。
