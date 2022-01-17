# nodejs 学习

## node package versions
- 13.4.6
- major: 13, minor: 4, patch: 6(偶数：稳定版本，奇数：不稳定版本)
- 版本符号
    - ^：锁定主版本号（major）
    - ~：锁定主版本号和次版本号（major，minor）
    - *：锁定最新版本
    - 没有符号：锁定patch


## cross-env
### 什么是cross-env
它是运行跨平台设置和使用环境变量(Node中的环境变量)的脚本。

### 为什么需要cross-env
我们在自定义配置环境变量的时候，由于在不同的环境下，配置方式也是不同的。例如在window和linux下配置环境变量。

### cross-env的作用是什么
当我们使用 NODE_ENV = production 来设置环境变量的时候，大多数windows命令会提示将会阻塞或者异常，或者，windows不支持NODE_ENV=development的这样的设置方式，会报错。因此 cross-env 出现了。我们就可以使用 cross-env命令，这样我们就不必担心平台设置或使用环境变量了。也就是说 cross-env 能够提供一个设置环境变量的scripts，这样我们就能够以linux方式设置环境变量，然而在windows上也能够兼容的。



## npm
npx 想要解决的主要问题，就是调用项目内部安装的模块

### 解决问题
https://juejin.cn/post/6844903991118151688
- 避免全局安装模块
- 更加方便的调用项目内部安装的模块
- 使用不同版本的node


## yarn
更改源：https://zhuanlan.zhihu.com/p/35856841


## node浏览器端调试
```bash
# 命令
node --inspect --inspect-brk <脚本文件(js)>
```


## node进程管理工具
- supervisor
- nodemon
- forever
- pm2


## 跨域
- jsonp
- CORS
- middleware(http-proxy-middwaremmm)


## nodejs - 包
- cheerio (在服务器端需要对DOM进行操作)


# nodejs 框架
## express
官网：https://www.expressjs.com.cn/

## express template
- ejs
- pug
- jade
- art-template


# 页面渲染
- SSR (Server Side Render -> 服务端渲染)
- CSR (Client Side Render -> 客户端渲染)
