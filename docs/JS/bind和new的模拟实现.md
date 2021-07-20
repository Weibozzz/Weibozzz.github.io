# bind和new的模拟实现
## bind
`bind` 应用 举个例子：
```js
var foo = {
    value: 1
};

function bar() {
    console.log(this.value);
}

// 返回了一个函数
var bindFoo = bar.bind(foo);

bindFoo(); // 1
```

### 最终代码

```js
Function.prototype.bind2 = function (context,...args) {
    if (typeof this !== "function") {
      throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var self = this;
    var fNOP = function () {};
    var fBound = function (...bindArgs) {
            // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
            // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
            // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    // 避免修改fBound的原型，通过一个空函数来进行中转
    fBound.prototype = new fNOP();
    return fBound;
}
```
## New

> new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一

举个例子：
```js
// Otaku 御宅族，简称宅
function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}
// 因为缺乏锻炼的缘故，身体强度让人担忧
Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}
var person = new Otaku('Kevin', '18');
console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60

person.sayYourName(); // I am Kevin
```

因为 `new` 是关键字，所以无法像 `bind` 函数一样直接覆盖，所以我们写一个函数，命名为 `objectFactory`，来模拟 `new` 的效果。用的时候是这样的：

### 实现

```js
function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    //判断返回的值是不是一个对象，如果是一个对象，我们就返回这个对象，如果没有，我们该返回什么就返回什么
    return typeof ret === 'object' ? ret : obj;

};
```

## 参考

- https://github.com/mqyqingfeng/Blog/issues/12
- https://github.com/mqyqingfeng/Blog/issues/13

## 今日图 - 安慰程序员的方法
![16b39c3e0a3096fa.jpg](../../images/16b39c3e0a3096fa.jpg)
