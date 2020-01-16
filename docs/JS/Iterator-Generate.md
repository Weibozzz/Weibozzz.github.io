## Iterator是什么，有什么作用？

遍历器（`Iterator`）就是这样一种机制。它是一种接口，为
各种不同的数据结构提供统一的访问机制。任何数据结构只要部署
Iterator接口，就可以完成遍历操作（即依次处理该数据结构的所有成员）。
Iterator 的作用有三个：

- 为各种数据结构，提供一个统一的、简便的访问接口；
- 使得数据结构的成员能够按某种次序排列；
- `ES6` 创造了一种新的遍历命令`for...of`循环，`Iterator` 接口主要供`for...of`消费。

遍历过程：

- 创建一个指针对象，指向当前数据结构的起始位置。也就是说，遍历器对象本质上，就是一个指针对象。
- 第一次调用指针对象的`next`方法，可以将指针指向数据结构的第一个成员。
- 第二次调用指针对象的`next`方法，指针就指向数据结构的第二个成员。
- 不断调用指针对象的`next`方法，直到它指向数据结构的结束位置。

每一次调用`next`方法，都会返回数据结构的当前成员的信息。具体来
说，就是返回一个包含`value`和`done`两个属性的对象。其中，`value`属性是
当前成员的值，`done`属性是一个布尔值，表示遍历是否结束。
```js
//obj就是可遍历的，因为它遵循了Iterator标准，且包含`[Symbol.iterator]`方法，方
// 法函数也符合标准的Iterator接口规范。
//obj.[Symbol.iterator]() 就是Iterator遍历器
let obj = {
  data: [ 'hello', 'world' ],
  [Symbol.iterator]() {
    const self = this;
    let index = 0;
    return {
      next() {
        if (index < self.data.length) {
          return {
            value: self.data[index++],
            done: false
          };
        } else {
          return { value: undefined, done: true };
        }
      }
    };
  }
};

```
## Generator 函数是什么，有什么作用？

如果说 `JavaScrip` 是 `ECMAScript` 标准的一种具体实现、`Iterator`遍历器是
Iterator的具体实现，
那么Generator函数可以说是Iterator接口的具体实现方式。

执行`Generator`函数会返回一个遍历器对象，每一次Generator函数里
面的`yield`都相当一次遍历器对象的next()方法，并且可以
通过`next(value)`方法传入自定义的value,来改变`Generator`函数的行为。

`Generator`函数可以通过配合`Thunk` 函数更轻松更优雅的实现异步编程和控制流管理。


- [https://juejin.im/post/5e1faa3d51882520a167df0e](https://juejin.im/post/5e1faa3d51882520a167df0e)
