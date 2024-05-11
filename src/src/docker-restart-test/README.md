# docker restart


## 命令
```bash
# 构建成镜像
docker build -t restart-test:first .

# 运行镜像
docker run --name=restart-test-container restart-test:first

# docker run 的时候也可以指定重启策略
# 加上 -d 把它放到后台跑
# --restart 指定总是重启
docker run -d --restart=always --name=restart-test-container2 restart-test:first



# 222.Dockerfile
# 构建
docker build -t restart-test:second -f 222.Dockerfile .

# 运行
docker run -d --name=restart-test-container3 restart-test:second
```



### --restart
always 是容器退出时总是重启

其实还有 on-failure 和 unless-stopped 这两种：

on-failure 是只有在非正常退出的时候才重启，相比之下，always 不管是不是非正常退出都重启。

而且 on-failure 还可以指定最多重启几次，比如 on-failure:3 是最多重启三次。

unless-stopped 是除非手动停止，否则总是会重启。

关掉docker app, always 重启策略的容器又跑起来了，而 unless-stopped 的容器没有重启。


#### 命令
```bash
# on-failure
docker run -d --restart=on-failure:2 --name=restart-test-container4 restart-test:first

# unless-stopped 
docker run -d --restart=unless-stopped --name=restart-test-container5 restart-test:first
```




## 总结
Docker 是支持自动重启的，可以在 docker run 的时候通过 --restart 指定重启策略，或者 Docker Compose 配置文件里配置 restart。

有 4 种重启策略：
- no: 容器退出不自动重启（默认值）
- always：容器退出总是自动重启，除非 docker stop。
- on-failure：容器非正常退出才自动重启，还可以指定重启次数，如 on-failure:5
- unless-stopped：容器退出不会自动重启
- 重启策略为 always 的容器在 Docker Deamon 重启的时候容器也会重启，而 unless-stopped 的不会。

其实我们用 PM2 也是主要用它进程崩溃的时候重启的功能，而在有了 Docker 之后，用它的必要性就不大了。

当然，进程重启的速度肯定是比容器重启的速度快一些的，如果只是 Docker 部署，可以结合 pm2-runtime 来做进程的重启。

绝大多数情况下，直接用 Docker 跑 node 脚本就行，不需要 PM2。
