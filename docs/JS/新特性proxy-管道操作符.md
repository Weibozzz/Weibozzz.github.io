## 管道操作符

> 试验性的管道操作符 |> （目前其标准化流程处于 stage 1 阶段）


```js
let url = "!" |> decodeURI;
```
使用传统语法写的话，等效的代码是这样的：

```js
let url = decodeURI("!");
```

### 语法
```js
expression |> function
```

### 例子
函数链式调用节
当链式调用多个函数时，使用管道操作符可以改善代码的可读性。
```js
const double = (n) => n * 2;
const increment = (n) => n   1;

// 没有用管道操作符
double(increment(double(5))); // 22

// 用上管道操作符之后
5 |> double |> increment |> double; // 22
```
## Proxy
> Proxy 对象用于定义基本操作的自定义行为（如属性查找，赋值，枚举，函数调用等）

### 语法
```js
let p = new Proxy(target, handler);
```
- target
用Proxy包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）。
- handler
一个对象，其属性是当执行一个操作时定义代理的行为的函数。

**方法**

`Proxy.revocable()`
创建一个可撤销的Proxy对象。

### 示例
#### 基础示例
在以下简单的例子中，当对象中不存在属性名时，缺省返回数为37。例子中使用了 get。
```js

let handler = {
    get: function(target, name){
        return name in target ? target[name] : 37;
    }
};

let p = new Proxy({}, handler);

p.a = 1;
p.b = undefined;

console.log(p.a, p.b);    // 1, undefined

console.log('c' in p, p.c);    // false, 37
```

#### 验证
通过代理，你可以轻松地验证向一个对象的传值。这个例子使用了 set。

```js
let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value > 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    // The default behavior to store the value
    obj[prop] = value;
  }
};

let person = new Proxy({}, validator);

person.age = 100;

console.log(person.age);
// 100

person.age = 'young';
// 抛出异常: Uncaught TypeError: The age is not an integer

person.age = 300;
// 抛出异常: Uncaught RangeError: The age seems invalid
```



## 摘自
- [管道操作符-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/管道操作符)
- [Proxy-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)


## 今日图 - 詹姆斯和史蒂芬森相爱相杀
![rereere.gif](../../images/rereere.gif)
