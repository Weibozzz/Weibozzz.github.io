# 理解JS函数节流和函数防抖
## 函数防抖和函数节流对比
它们的目标都是为了防止过多的无意义函数调用。

函数防抖的目的是在多次连续触发事件时，在指定时间内（`delay` 参数）若再次触发调用回调函数，那么将忽略当前的函数调用，只有在经过指定时间内，没有再次触发事件时，才会真正的调用回调函数。

函数节流的目的是为了限制回调函数的最高执行频率的（比如 1s 内最多执行 2 次）。在单位时间内（`wait` 参数）最多执行一次回调函数调用。多余的回调函数调用将被忽略。

二者与普通回调函数调用的可视化对比如下：

![38978809-fe601d98-43ea-11e8-9b67-491b52b2b76c.PNG](../../images/38978809-fe601d98-43ea-11e8-9b67-491b52b2b76c.PNG)

## throttle 应用场景
函数节流有哪些应用场景？哪些时候我们需要间隔一定时间触发回调来控制函数调用频率？

- `DOM` 元素的拖拽功能实现（`mousemove`）
- 射击游戏的 `mousedown/keydown` 事件（单位时间只能发射一颗子弹）
- 计算鼠标移动的距离（`mousemove`）
- Canvas 模拟画板功能（`mousemove`）
- 搜索联想（`keyup`）
- 监听滚动事件判断是否到页面底部自动加载更多：给 `scroll` 加了 `debounce` 后，只有用户停止滚动后，才会判断是否到了页面底部；如果是 `throttle` 的话，只要页面滚动就会间隔一段时间判断一次

```js
/**
 * 用于限制 fn 函数在 period 时间段内只调用一次，即限制 fn 调用的频率
 * 示例中实现了首次和末次一定会被调用，中间调用被限定为一定频率
 *
 * @param {Function} fn 要被节流的函数
 * @param {number} [period=200] 被节流的时间段
 * @returns 一个匿名函数包装
 */
function throttle (fn, period=200) {
  let _lastTime = null
  let _timer = null
  return function (...args) {
    const _nowTime = +new Date()

    _timer && clearTimeout(_timer)

    if (!_lastTime || _nowTime - _lastTime > period) {
      fn.apply(this, args)
      _lastTime = _nowTime
    } else {
      // 确保最后一次即使不满足 period 时间段，但仍会调用
      // 使用箭头函数来确保 this 不变
      _timer = setTimeout(() => {
        fn.apply(this, args)
      }, period)
    }
  }
}
```


## debounce 应用场景
函数去抖有哪些应用场景？哪些时候对于连续的事件响应我们只需要执行一次回调？

- 每次 `resize/scroll` 触发统计事件
- 文本输入的验证（连续输入文字后发送 AJAX 请求进行验证，验证一次就好）


```js
/**
 * @param  {Function} fn     要实现函数防抖的原函数
 * @param  {Number}   delay  延迟时间
 * @param  {Boolean}   now   是否第一次立即调用后启用防抖
 * @return {Function}        添加防抖功能的包装函数
 */
// 最后一次调用总是会被执行
  function debounce (fn, wait = 800, now = true) {
    let __timer = null
    let isFirst = now
    return function (...args) {
      if (__timer) clearTimeout(__timer)
      if (isFirst) {
        fn.apply(this, args)
        isFirst = false
      } else {
        __timer = setTimeout(() => {
          fn.apply(this, args)
        }, wait)
      }
    }
  }
```


## 今日图
![gdgf.gif](../../images/gdgf.gif)
