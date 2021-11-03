# IntersectionObserver

## API解释
`IntersectionObserver` 接口 (从属于`Intersection Observer API`) 提供了一种异步观察目标元素与其祖先元素或顶级文档视窗(`viewport`)交叉状态的方法。祖先元素与视窗(`viewport`)被称为根(`root`)。

当一个 `IntersectionObserver` 对象被创建时，其被配置为监听根中一段给定比例的可见区域。一旦 `IntersectionObserver` 被创建，则无法更改其配置，所以一个给定的观察者对象只能用来监听可见区域的特定变化值；然而，你可以在同一个观察者对象中配置监听多个目标元素。

## 个人理解
最简单的理解可以监听 `dom` 元素在浏览器中可见区域的比例
### 三个例子
> 原生，可根据可见区域隐藏隐藏 dom。vue 和 react 可以封装组件，懒加载组件 
1. [原生示例](https://weibozzz.github.io/some-componets/web/IntersectionObserver/index.html)
2. [vue示例](https://weibozzz.github.io/some-componets/web/IntersectionObserver/index-vue.html)
3. [react示例](https://weibozzz.github.io/some-componets/web/IntersectionObserver/index-react.html)
## 参考
- [ruanyifeng 使用教程](https://www.ruanyifeng.com/blog/2016/11/intersectionobserver_api.html)
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
## 今日图 - 安慰程序员的方法
![16b39c3e0a3096fa.jpg](../../../images/16b39c3e0a3096fa.jpg)
