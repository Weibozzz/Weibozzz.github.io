## 装饰模式

> 仅仅包装现有的模块，使之 “更加华丽” ，并不会影响原有接口的功能 —— 好比你给手机添加一个外壳罢了，并不影响手机原有的通话、充电等功能；

## 使用 ES7 的 decorator
`ES7` 中增加了一个 `decorator` 属性，它借鉴自 `Python`

下面我们以 钢铁侠 为例讲解如何使用 `ES7` 的 `decorator`。

以钢铁侠为例，钢铁侠本质是一个人，只是“装饰”了很多武器方才变得那么 `NB`，不过再怎么装饰他还是一个人。

![TB1ex47KXXXXXbmXXXXXXXXXXXX-1024-768.jpg](../../images/TB1ex47KXXXXXbmXXXXXXXXXXXX-1024-768.jpg)

我们的示例场景是这样的

- 首先创建一个普通的`Man`类，它的抵御值 2，攻击力为 3，血量为 3；
- 然后我们让其带上钢铁侠的盔甲，这样他的抵御力增加 100，变成 102；
- 让其带上光束手套，攻击力增加 50，变成 53；
- 最后让他增加“飞行”能力

### 【Demo 1】对方法的装饰：装备盔甲
创建 `Man` 类：
```js
class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);

// 输出：当前状态 ===> 防御力:2,攻击力:3,血量:3
```

> 代码直接放在 http://babeljs.io/repl/ 中运行查看结果，
记得勾选`Setting`的`Evaluate`选项，和 `options`的选项为`legacy`

创建 `decorateArmour` 方法，为钢铁侠装配盔甲——注意 `decorateArmour` 是装饰在方法`init`上的。

```js
function decorateArmour(target, key, descriptor) {
  const method = descriptor.value;
  let moreDef = 100;
  let ret;
  descriptor.value = (...args)=>{
    args[0] += moreDef;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  toString(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}

var tony = new Man();

console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
```

我们先看输出结果，防御力的确增加了 100，看来盔甲起作用了。

`Decorators` 的本质是利用了 `ES5` 的 `Object.defineProperty` 属性，这三个参数其实是和 `Object.defineProperty` 参数一致的

### 【Demo 2】装饰器叠加：增加光束手套
在上面的示例中，我们成功为 普通人 增加 “盔甲” 这个装饰；现在我想再给他增加 “光束手套”，希望额外增加 50 点防御值。

```js
...
function decorateLight(target, key, descriptor) {
  const method = descriptor.value;
  let moreAtk = 50;
  let ret;
  descriptor.value = (...args)=>{
    args[1] += moreAtk;
    ret = method.apply(target, args);
    return ret;
  }
  return descriptor;
}

class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  @decorateLight
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
...
}
var tony = new Man();
console.log(`当前状态 ===> ${tony}`);
//输出：当前状态 ===> 防御力:102,攻击力:53,血量:3
```

在这里你就能看出装饰模式的优势了，它可以对某个方法进行叠加使用，对原类的侵入性非常小，只是增加一行`@decorateLight`而已，可以方便地增删；（同时还可以复用）

### 【Demo 3】对类的装饰：增加飞行能力

装饰模式有两种：纯粹的装饰模式 和 半透明的装饰模式。

上述的两个 `demo` 中所使用的应该是 纯粹的装饰模式，它并不增加对原有类的接口；下面要讲 `demo` 是给普通人增加“飞行”能力，相当于给类新增一个方法，属于 半透明的装饰模式，有点儿像适配器模式的样子。

```js

...

// 3
function addFly(canFly){
  return function(target){
    target.canFly = canFly;
    let extra = canFly ? '(技能加成:飞行能力)' : '';
    let method = target.prototype.toString;
    target.prototype.toString = (...args)=>{
      return method.apply(target.prototype,args) + extra;
    }
    return target;
  }
}

@addFly(true)
class Man{
  constructor(def = 2,atk = 3,hp = 3){
    this.init(def,atk,hp);
  }

  @decorateArmour
  @decorateLight
  init(def,atk,hp){
    this.def = def; // 防御值
    this.atk = atk;  // 攻击力
    this.hp = hp;  // 血量
  }
  ...
}
...

console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:53,血量:3(技能加成:飞行能力)
```

作用在方法上的 `decorator` 接收的第一个参数（`target` ）是类的 `prototype`；如果把一个 `decorator` 作用到类上，则它的第一个参数 `target` 是 类本身。

## 使用原生 JS 实现装饰器模式

- Man 是具体的类，`Decorator` 是针对 `Man` 的装饰器基类
- 具体的装饰类 `DecorateArmour` 典型地使用 `prototype` 继承方式 继承自 `Decorator` 基类；
- 基于 `IOC`（控制反转）思想 ，`Decorator` 是接受 `Man` 类，而不是自己创建 `Man` 类；

```js
// 首先我们要创建一个基类
function Man(){

  this.def = 2;
  this.atk = 3;
  this.hp = 3;
}

// 装饰者也需要实现这些方法，遵守 Man 的接口
Man.prototype={
  toString:function(){
    return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`;
  }
}
// 创建装饰器，接收 Man 对象作为参数。
var Decorator = function(man){
  this.man = man;
}

// 装饰者要实现这些相同的方法
Decorator.prototype.toString = function(){
    return this.man.toString();
}

// 继承自装饰器对象
// 创建具体的装饰器，也是接收 Man 作对参数
var DecorateArmour = function(man){

  var moreDef = 100;
  man.def += moreDef;
  Decorator.call(this,man);

}
DecorateArmour.prototype = new Decorator();

// 接下来我们要为每一个功能创建一个装饰者对象，重写父级方法，添加我们想要的功能。
DecorateArmour.prototype.toString = function(){
  return this.man.toString();
}

// 注意这里的调用方式
// 构造器相当于“过滤器”，面向切面的
var tony = new Man();
tony = new DecorateArmour(tony);
console.log(`当前状态 ===> ${tony}`);
// 输出：当前状态 ===> 防御力:102,攻击力:3,血量:3
```

## 经典实现：Logger

经典应用就是 日志系统 了，那么我们也用 `ES7` 的语法给钢铁侠打造一个日志系统吧。

```js
/**
 * Created by jscon on 15/10/16.
 */
let log = (type) => {

  return (target, name, descriptor) => {
    const method = descriptor.value;
    descriptor.value =  (...args) => {
      console.info(`(${type}) 正在执行: ${name}(${args}) = ?`);
      let ret;
      try {
        ret = method.apply(target, args);
        console.info(`(${type}) 成功 : ${name}(${args}) => ${ret}`);
      } catch (error) {
        console.error(`(${type}) 失败: ${name}(${args}) => ${error}`);
      }
      return ret;
    }
  }
}
class IronMan {
  @log('IronMan 自检阶段')
  check(){
    return '检查完毕';
  }
  @log('IronMan 攻击阶段')
  attack(){
    return '击倒敌人';
  }
  @log('IronMan 机体报错')
  error(){
    throw 'Something is wrong!';
  }
}

var tony = new IronMan();
tony.check();
tony.attack();
tony.error();

// 输出：
// (IronMan 自检阶段) 正在执行: check() = ?
// (IronMan 自检阶段) 成功 : check() => 检查完毕
// (IronMan 攻击阶段) 正在执行: attack() = ?
// (IronMan 攻击阶段) 成功 : attack() => 击倒敌人
// (IronMan 机体报错) 正在执行: error() = ?
// (IronMan 机体报错) 失败: error() => Something is wrong!
```

Logger 方法的关键在于：

- 首先使用 `const method = descriptor.value;` 将原有方法提取出来，保障原有方法的纯净；
- 在 `try..catch` 语句是 调用 `ret = method.apply(target, args);`在调用之前之后分别进行日志汇报；
- 最后返回 `return ret;` 原始的调用结果

### 相关库

- https://github.com/jayphelps/core-decorators

## vue中使用装饰器实现AOP编程
在`JavaScript`中实现`AOP`，是把一个函数“动态织入”到另一个函数之中。
首先要构造`Function`的`prototype`
```js
//prototype.js
Function.prototype.before = function (beforefn) {
  let _self = this;
  return function () {
    beforefn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};
Function.prototype.after = function (afterfn) {
  let _self = this;
  return function () {
    let ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
Function.prototype.around = function (beforefn, afterfn) {
  let _self = this;
  return function () {
    beforefn.apply(this, arguments);
    let ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};
```

编辑我们的装饰器函数
```js
//decorator.js
export const before = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.before(() => {
      console.log(`Action-${key} 触发埋点!`);
    });
  };
};
export const after = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.after(() => {
      console.log(`Action-${key} 触发埋点!`);
    });
  };
};
export const around = function (...args) {
  return function (target, key, descriptor) {
    descriptor.value = descriptor.value.around(() => {
      console.log(`Action-${key} 触发埋点before!`);
    }, () => {
      console.log(`Action-${key} 触发埋点after!`);
    });
  };
};
```

编辑我们的`vue`文件
```js
//test.vue
<template>
  <div></div>
</template>
<script>
import { before, after, around } from '@/lib/decorator';
export default {
  data () {

  },
  methods: {
    @before()
    @after()
    @around()
    errorHandle () {
      // 一些共用的异常处理方案
    }
  },
};
</script>
```

`.babelrc文件`

```json
{
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "legacy": true }]
  ]
}
```

## 摘自
- [淘宝前端团队](http://taobaofed.org/blog/2015/11/16/es7-decorator/)
- https://www.jianshu.com/p/208904b34d8f

## 今日图 羞羞哒
![gdfs.gif](../../images/gdfs.gif)
