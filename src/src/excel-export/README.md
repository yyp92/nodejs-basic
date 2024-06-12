# 国际化资源包如何通过 Excel 和 Google Sheet 分享


## 命令
```bash
# 创建项目
mkdir excel-export
cd excel-export
npm init -y

# 安装 exceljs
npm install --save exceljs


# 生成 google sheet
# 安装 csv-stringify
npm install --save-dev csv-stringify

# 这里用 curl 命令来下载，-L 是自动跳转的意思，因为访问这个 url 会跳转一个新的地址。
# 安装用到的包：
npm install --save-dev csv-parse
```




## 总结
国际化资源包需要交给产品经理去翻译，我们会把 json 转成 excel 交给他。

我们先用 exceljs 实现了 excel 的解析和生成，编辑完之后再转成 en-US.json、zh-CN.json 的资源包。

然后用 google sheet 实现了在线编辑和分享，编辑完之后下载并解析 csv，然后转成 en-US.json、zh-CN.json 的资源包。

用到了 csv-parse、csv-stingify。

这两种方案都可以，确定好方案之后把这些脚本内置到项目里就可以了。
