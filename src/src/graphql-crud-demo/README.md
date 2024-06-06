# GraphQL 快速入门
GraphQL 全称是 graph query language，就是从这个对象的 graph 中查询数据的。


## 命令
```bash
# 创建项目
mkdir graphql-crud-demo
cd graphql-crud-demo
npm init -y

# 安装用到的包
npm install @apollo/server
```




## 原理
完成了 graphql 的入门，我们再稍微思考下它的原理。graphql 是怎么实现的呢？

回顾整个流程，我们发现涉及到两种 DSL（领域特定语言），一个是 schema 定义的 DSL，一个是查询的 DSL。

服务端通过 schema 定义的 DSL 来声明 graph 图，通过 resolver 来接受参数，执行查询和增删改。

客户端通过查询的 DSL 来定义如何查询和如何增删改，再发给服务端来解析执行。

通过这种 DSL 实现了动态的查询。

确实很方便很灵活，但也有缺点，就是 parse DSL 为 AST 性能肯定是不如 restful 那种直接执行增删改查高的。

具体要不要用 graphql 还是要根据具体场景来做判断。




## 总结
restful 接口是 url 代表资源，GET、POST、PUT、DELETE 请求代表对资源的增删改查。

这种接口返回什么数据完全由服务端决定，每次接口变动可能就得新加一种接口。

为了解决这种问题，facebook 创造了 graphql，这种接口返回什么数据完全由客户端决定。增删改查通过这一个接口就可以搞定。

graphql 需要在服务端定义 schema，也就是定义对象类型和它的字段，对象类型和对象类型之间会有关联，也就是一个 graph，查询就是从这个 graph 里查询数据。

除了 schema 外，还需要有 resolver，它负责接受客户端的参数，完成具体数据的增删改查。

graphql 会暴露一个 post 接口，通过查询语言的语法就可以从通过这个接口完成所有增删改查。

本地测试的时候，get 请求会跑一个 sandbox，可以在这里测试接口。

整个流程涉及到两种新语言： schema 定义语言和 query 查询语言。入门之后向深入的话就是要学下这两种 DSL 的更多语法。

感受到 graphql 的强大之处了么？一个接口就可以实现所有的 CRUD！
