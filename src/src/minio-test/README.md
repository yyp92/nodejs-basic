# 用 minio 自己搭一个 OSS 服务

[minio 文档](https://min.io/docs/minio/linux/developers/javascript/minio-javascript.html)



## 总结
文件上传一般我们都是用 OSS 服务来存储，比如阿里云的 OSS。

但是 OSS 是收费的，而且有些敏感数据不能传到云上，需要私有部署，这种就可以自己搭一个 OSS 服务。

我们用 docker 跑了一个 minio 的容器，然后分别在管理界面和用 npm 包的方式做了文件上传和下载。

用法和阿里云 OSS 差不多，因为他们都是亚马逊 S3 规范的实现。
