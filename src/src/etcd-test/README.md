# 用 Etcd 实现微服务配置中心和注册中心


## 总结
微服务架构的系统中少不了配置中心和注册中心。

不同服务的配置需要统一管理，并且在更新后通知所有的服务，所以需要配置中心。

微服务的节点可能动态的增加或者删除，依赖他的服务在调用之前需要知道有哪些实例可用，所以需要注册中心。

服务启动的时候注册到注册中心，并定时续租期，调用别的服务的时候，可以查一下有哪些服务实例可用，也就是服务注册、服务发现功能。

注册中心和配置中心可以用 etcd 来做，它就是一个专业做这件事的中间件，k8s 就是用的它来做的配置和服务注册中心。

我们用 docker 跑了 etcd server，它内置了命令行工具 etcdctl 可以用来和 server 交互。

常用的命令有 put、get、del、watch 等。

在 node 里可以通过 etcd3 这个包来操作 etcd server。

稍微封装一下就可以实现配置管理和服务注册、发现的功能。

在微服务架构的后端系统中，配置中心、注册中心是必不可少的组件，不管是 java、go 还是 Node.js。
