## websocket
由于http请求只能由客户端发起，所有当服务器资源有变化时，客户端只能通过轮询的方式。非常浪费资源。
websocket的特点：
- 服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种
- 建立在 `TCP` 协议之上，服务器端的实现比较容易
- 可以发送文本，也可以发送二进制数据
- 没有同源限制，客户端可以与任意服务器通信
- 协议标识符是`ws`（如果加密，则为`wss`），服务器网址就是 URL。如`ws:localhost:8080/msg`

## 简单示例

```js
var ws = new WebSocket("ws://localhost:8080/msg");

ws.onopen = function(evt) {
	console.log("Connection open ...");
	ws.send("Hello WebSockets!");
};

ws.onmessage = function(evt) {
	console.log("Received Message: ", evt.data);
	ws.close();
};

ws.onclose = function(evt) {
	console.log("Connection closed.");
};

```

### node服务端

```js
const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server
const wss = new WebSocketServer({
  port: 8080
})
wss.on('connection', function (ws) {
  ws.on('message', function (message) {
  // message 接收到的参数
    ws.send('已接受到')
  });
})
```

## api
1.  websocket构造函数

用于创建一个`webSocket`实例，执行后，客户端就会与服务端连接

```js
var ws = new WebSocket("ws://localhost:8080/msg");

```

2. webSocket.readyState

`readyState`属性返回实例对象的当前状态，共有四种。
- CONNECTING：值为0，表示正在连接。
- OPEN：值为1，表示连接成功，可以通信了。
- CLOSING：值为2，表示连接正在关闭。
- CLOSED：值为3，表示连接已经关闭，或者打开连接失败

例如：`if(ws.readyState ==WebSocket.CONNECTING){}`

3. 其他属性

[https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)

- WebSocket.binaryType
- WebSocket.onerror
- WebSocket.onclose
- WebSocket.onmessage

**方法**
- WebSocket.close([code[, reason]])
关闭当前链接
- WebSocket.send(data)
向服务器发送数据
  
## 相关推荐
- [SSE服务端推送](./docs/JS/SSE服务端推送.md)

## 今日图
![16b1c4ddef5d24dc.gif](../../images/16b1c4ddef5d24dc.gif)
