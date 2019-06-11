## Call
`call()` 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

举个例子：
```js
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

bar.call(foo); // 1
```
注意两点：

`call` 改变了 `this` 的指向，指向到 `foo`

`bar` 函数执行了

### 模拟实现

```js
// 第三版
Function.prototype.call2 = function (context, ...rest) {
    var context = context || window
    context.fn = this;
    var result = context.fn(...rest);
    delete context.fn
    return result;
}

// 测试一下
var value = 2;

var obj = {
    value: 1
}

function bar(name, age) {
    console.log(this.value);
    return {
        value: this.value,
        name: name,
        age: age
    }
}

bar.call2(null); // 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```
## apply
`apply`的模拟实现
`apply` 的实现跟 `call` 类似，在这里直接给代码：

```js
Function.prototype.apply1 = function (context, ...rest) {
    var context = context || window;
    context.fn = this;
    var result = context.fn(rest);
    delete context.fn
    return result;
}

```
## 参考

- https://github.com/mqyqingfeng/Blog/issues/11

## 今日图 - 掏 哎呦 难受！
![4a20e50778d1ec02fb7fe03a860310f2.jpg](../../images/4a20e50778d1ec02fb7fe03a860310f2.jpg)
