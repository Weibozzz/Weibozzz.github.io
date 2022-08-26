# ngrok内网穿透
## 安装
### mac
1. 访问 `Ngrok` 官网：`https://dashboard.ngrok.com/get-started`，并注册或使用第三方登录。
2. 点击解压后，将 `ngrok` 拖拽到应用程序目录。
3. 在 `Mac` 中移动完成后程序目录为 `/Applications/ngrok`
4. 建立 `Ngrok` 软连接
```
cd /usr/local/bin
ln -s /Applications/ngrok ngrok
#创建之后，可以在任意地方使用 ngrok 命令

ngrok authtoken 授权码

ngrok http 8080
#完成后 ngrok 命令行会有外网链接。这里的端口8080可以根据需要替换成其他端口。这条命令的意思是将本地8080端口对应的服务暴露到外网中。
```
## 参考
- https://dashboard.ngrok.com/get-started/setup
- https://zhuanlan.zhihu.com/p/43628167
- https://learnku.com/articles/36129
