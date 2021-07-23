# 调试node
调试node程序
## 使用客户端ide
## 使用命令
`Chrome DevTools` 是从什么时候开始支持 `node` 调试、他怎么支持的、
都经历了几个版本的变化啊这些陈芝麻烂谷子我们不关心(其实我不知道)，
我们只关心我们如何才能用上这种方法。只需三步。

`Step 0` 检查你的环境
要使用这种方法是有限制的。需要

- Node.js 6.3+
- Chrome 55+

`Setp 1` 跑起你的程序
使用方法很优雅，只需用下面的命令把你的`node`代码跑起来

`node --inspect app.js`
如果你想让他在第一行就停下来,等待调试也可以使用

`node --inspect-brk app.js`
然后就会得到形如下面这样的输出

```
Debugger listening on ws://127.0.0.1:9229/4dc825ec-a204-46f8-8edc-4afadc8da61a
For help see https://nodejs.org/en/docs/inspector
```

`Setp 2` 调试界面在哪里
好了,程序现在已经可以开始调试了，只是我们需要找找调试界面在哪里。
我知道有两种方式可以打开调试界面

1. 在`Chrome`中打开`chrome://inspect/#devices`
2. `chrome` 打开 `127.0.0.1:9229/json`，会出现一个`json`,用浏览器打开 `devtoolsFrontendUrl`字段就可以调试了
## 引用
- https://nodejs.org/en/docs/inspector
- https://nodejs.org/zh-cn/docs/guides/debugging-getting-started/
- https://www.cnblogs.com/foreachlife/p/9341167.html
