## 前言

为什么用 `requestAnimationFrame`代替 `setInterval` 和 `setTimeout`？那得先了解微任务、宏任务与`Event-Loop`，
还有 `setInterval` 存在的问题

## requestAnimationFrame

> window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，
并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

**若你想在浏览器下次重绘之前继续更新下一帧动画，那么回调函数自身必须再次调用window.requestAnimationFrame()**

### 语法
`window.requestAnimationFrame(callback);`

- callback
  下一次重绘之前更新动画帧所调用的函数(即上面所说的回调函数)。该回调函数会被传
  入`DOMHighResTimeStamp`参数，该参数与`performance.now()`的返回值相同，它表示`requestAnimationFrame() `开
  始去执行回调函数的时刻。
- 返回值
  一个 `long` 整数，请求 `ID` ，是回调列表中唯一的标识。是个非零值，没别的意义。你可以传这个值给 `window.cancelAnimationFrame()` 以取消回调函数。


## 了解微任务、宏任务与Event-Loop
[微任务_宏任务与Event-Loop](./微任务_宏任务与Event-Loop.md)

## 运行机制

### setTimeout 
```js
setTimeout(function(){
    console.log(1);
});
console.log(0);

```
　　实际上，把`setTimeout`的第二个参数设置为`0s`，并不是立即执行函数的意思，只是把函数放入异步队列。浏览器先执行完同步队列里的任务，才会去执行异步队列中的任务

　　在下面这个例子中，给一个按钮`btn`设置了一个事件处理程序。事件处理程序设置了一个`250ms`后调用的定时器。点击该按钮后，
首先将`onclick`事件处理程序加入队列。该程序执行后才设置定时器，再有250ms后，指定的代码才被添加到队列中等待执行

```js

btn.onclick = function(){
    setTimeout(function(){
        console.log(1);
    },250);
}
```
　　如果上面代码中的`onclick`事件处理程序执行了`300ms`，那么定时器的代码至少要在定时器设置之后的`300ms`后才会被执行。队列中所有
的代码都要等到`javascript`进程空闲之后才能执行，而不管它们是如何添加到队列中的

### setInterval

使用`setInterval()`的问题在于，定时器代码可能在代码再次被添加到队列之前还没有完成执行，结果导致定时器代码连续运行好几次，而之间没有任何停顿。
而`javascript`引擎对这个问题的解决是：当使用`setInterval()`时，仅当没有该定时器的任何其他代码实例时，才将定时器代码添加到队列中。这确保了定时器代码
加入到队列中的最小时间间隔为指定间隔

　　但是，这样会导致两个问题：**1、某些间隔被跳过；2、多个定时器的代码执行之间的间隔可能比预期的小**

　　假设，某个`onclick`事件处理程序使用`setInterval()`设置了`200ms`间隔的定时器。如果事件处理程序花了`300ms`多一点时间完成，同时定时器代码也花了差不
多的时间，就会同时出现跳过某间隔的情况

![](../../images/setinterval.jpg)

　　例子中的第一个定时器是在`205ms`处添加到队列中的，但是直到过了`300ms`处才能执行。当执行这个定时器代码时，在`405ms`处又给队列
添加了另一个副本。在下一个间隔，即605ms处，第一个定时器代码仍在运行，同时在队列中已经有了一个定时
器代码的实例。结果是，在这个时间点上的定时器代码不会被添加到队列中

# RAF替代setTimeout_setInterval

## 迭代setTimeout实现setInterval

某些公司会禁用 `setInterval`
为了避免`setInterval()`定时器的问题，可以使用链式`setTimeout()`调用
```js
setTimeout(function fn(){
    setTimeout(fn,interval);
},interval);
```
## 模拟setInterval/setTimeout的基本使用
### RAF

```js
class RAF {
  constructor () {
    this.init()
  }
  init () {
    this._timerIdMap = {
      timeout: {},
      interval: {}
    }
  }
  run (type = 'interval', cb, interval = 16.7) {
    const now = Date.now
    let stime = now()
    let etime = stime
    //创建Symbol类型作为key值，保证返回值的唯一性，用于清除定时器使用
    const timerSymbol = Symbol()
    const loop = () => {
      this.setIdMap(timerSymbol, type, loop)
      etime = now()
      if (etime - stime >= interval) {
        if (type === 'interval') {
          stime = now()
          etime = stime
        }
        cb()
        type === 'timeout' && this.clearTimeout(timerSymbol)
      }
    }
    this.setIdMap(timerSymbol, type, loop)
    return timerSymbol // 返回Symbol保证每次调用setTimeout/setInterval返回值的唯一性
  }
  setIdMap (timerSymbol, type, loop) {
    const id = requestAnimationFrame(loop)
    this._timerIdMap[type][timerSymbol]= id
  }
  setTimeout (cb, interval) {  // 实现setTimeout 功能
    return this.run('timeout', cb, interval)
  }
  clearTimeout (timer) {
    cancelAnimationFrame(this._timerIdMap.timeout[timer])
  }
  setInterval (cb, interval) { // 实现setInterval功能
    return this.run('interval', cb, interval)
  }
  clearInterval (timer) {
    cancelAnimationFrame(this._timerIdMap.interval[timer])
  }
}
```

### 使用

```js
var raf = new RAF()
var timer1 = raf.setInterval(() =>{
  console.log(1000)
}, 1000)

var timer2 = raf.setInterval(() =>{
  console.log(1500)
}, 1500)

raf.setTimeout(() => {
  raf.clearInterval(timer1)
  raf.clearInterval(timer2)
}, 6000)
```

## 引用

- [requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/window/requestAnimationFrame)
- [深入理解定时器系列第一篇——理解setTimeout和setInterval](https://www.cnblogs.com/xiaohuochai/p/5773183.html)
- [RAF替代setTimeout/setInterval](https://zhuanlan.zhihu.com/p/34868095)
