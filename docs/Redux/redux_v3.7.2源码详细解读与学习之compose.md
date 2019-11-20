## 上代码看效果

```js
  function compose (...funcs) {
    if (funcs.length === 0) {
      return args => args
    }
    if (funcs.length === 1) {
      return funcs[0]
    }
    return funcs.reduce((a, b) => (...args) => b(a(...args)))
  }
  // 千分符号
  function thousandSplit (num) {
    return String(num)
      .replace(/(?=\B(?:\d{3})+\b)(\d{3}(\.\d+$)?)/g, ',$1');
  }
  // 保留两位数字向下取整
  function floor (num) {
    return (Math.floor(num * 100) / 100).toFixed(2);
  }

  var conts = 125885.365
  console.log('正常我们的做法', thousandSplit(floor(conts)))
  console.log('compose', compose(
    floor,
    thousandSplit
  )(conts))
```

如果有点看不懂可以看看原作者讲解，我这里介绍一下我看后的实践，只有运用才能真正掌握！

## 摘自
- https://blog.seosiwei.com/detail/12

## 今日图 - 我以为我变秃了，也会变强的。后来我找到原因了，越洗越少
![16d7bd644e2332d9.png](../../images/16d7bd644e2332d9.png)
