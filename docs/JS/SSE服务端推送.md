## SSE服务端推送
    `SSE` (Server-sent Events) 是 `WebSocket` 的一种轻量代替方案，使用 `HTTP` 协议。
与 `WebSockets`,不同的是，服务端推送是单向的。

严格地说，`HTTP` 协议是没有办法做服务器推送的，但是当服务器向客户端声明接下来要发送流信息时，
客户端就会保持连接打开，`SSE` 使用的就是这种原理。

## 简单示例

### 服务端

```js
'use strict';

const http = require('http');

http.createServer((req, res) => {

  // 服务器声明接下来发送的是事件流
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });

  // 发送消息
  setInterval(() => {
    res.write('event: slide\n'); // 事件类型
    res.write(`id: ${+new Date()}\n`); // 消息 ID
    res.write('data: 7\n'); // 消息数据
    res.write('retry: 10000\n'); // 重连时间
    res.write('\n\n'); // 消息结束
  }, 3000);

  // 发送注释保持长连接
  setInterval(() => {
    res.write(': \n\n');
  }, 12000);
}).listen(2000);
```

### 客户端

```js
if (window.EventSource) {
  // 创建 EventSource 对象连接服务器
  const source = new EventSource('http://localhost:2000');

  // 连接成功后会触发 open 事件
  source.addEventListener('open', () => {
    console.log('Connected');
  }, false);

  // 服务器发送信息到客户端时，如果没有 event 字段，默认会触发 message 事件
  source.addEventListener('message', e => {
    console.log(`data: ${e.data}`);
  }, false);

  // 自定义 EventHandler，在收到 event 字段为 slide 的消息时触发
  source.addEventListener('slide', e => {
    console.log(`data: ${e.data}`); // => data: 7
  }, false);

  // 连接异常时会触发 error 事件并自动重连
  source.addEventListener('error', e => {
    if (e.target.readyState === EventSource.CLOSED) {
      console.log('Disconnected');
    } else if (e.target.readyState === EventSource.CONNECTING) {
      console.log('Connecting...');
    }
  }, false);
} else {
  console.error('Your browser doesn\'t support SSE');
}
```

## 事件

- `error` Fired when a connection to an event source failed to open.
- `message` Fired when data is received from an event source.
- `open` Fired when a connection to an event source has opened.

## 参考

- https://developer.mozilla.org/zh-CN/docs/Server-sent_events/EventSource
- https://www.cnblogs.com/goloving/p/9196066.html

## 相关推荐
- [js实现webSocket客户端](./docs/JS/js实现webSocket客户端.md)

## 兼容性
不支持ie

