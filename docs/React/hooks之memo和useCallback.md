# hooks之memo和useCallback
## useCallback 记忆函数
在类组件中，我们经常犯下面这样的错误：
```js
class App {
    render() {
        return <div>
            <SomeComponent style={{ fontSize: 14 }} doSomething={ () => { console.log('do something'); }}  />
        </div>;
    }
}
```
这样写有什么坏处呢？一旦 `App` 组件的 `props` 或者状态改变了就会触发重渲染，即使跟 `SomeComponent` 组件不相关，由于每次 `render` 都会产生新的 `style` 和 `doSomething`，所以会导致 `SomeComponent` 重新渲染，倘若 `SomeComponent` 是一个大型的组件树，这样的 `Virtual Dom` 的比较显然是很浪费的，解决的办法也很简单，将参数抽离成变量。

```js
const fontSizeStyle = { fontSize: 14 };
class App {
    doSomething = () => {
        console.log('do something');
    }
    render() {
        return <div>
            <SomeComponent style={fontSizeStyle} doSomething={ this.doSomething }  />
        </div>;
    }
}
```
在类组件中，我们还可以通过 `this` 这个对象来存储函数，而在函数组件中没办法进行挂载了。所以函数组件在每次渲染的时候如果有传递函数的话都会重渲染子组件。

```js
function App() {
  const handleClick = () => {
    console.log('Click happened');
  }
  return <SomeComponent onClick={handleClick}>Click Me</SomeComponent>;
}
```
而有了 `useCallback` 就不一样了，你可以通过 `useCallback` 获得一个记忆后的函数。

```js
function App() {
  const memoizedHandleClick = useCallback(() => {
    console.log('Click happened')
  }, []); // 空数组代表无论什么情况下该函数都不会发生改变
  return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
```
老规矩，第二个参数传入一个数组，数组中的每一项一旦值或者引用发生改变，`useCallback` 就会重新返回一个新的记忆函数提供给后面进行渲染。

这样只要子组件继承了 `PureComponent` 或者使用 `React.memo` 就可以有效避免不必要的 `VDOM` 渲染。

## useMemo 记忆组件
`useCallback` 的功能完全可以由 `useMemo` 所取代，如果你想通过使用 `useMemo` 返回一个记忆函数也是完全可以的。

`useCallback(fn, inputs) is equivalent to useMemo(() => fn, inputs).`
所以前面使用 `useCallback` 的例子可以使用 `useMemo` 进行改写：

```js
function App() {
  const memoizedHandleClick = useMemo(() => () => {
    console.log('Click happened')
  }, []); // 空数组代表无论什么情况下该函数都不会发生改变
  return <SomeComponent onClick={memoizedHandleClick}>Click Me</SomeComponent>;
}
```
唯一的区别是：**useCallback 不会执行第一个参数函数，而是将它返回给你，而 useMemo 会执行第一个函数并且将函数执行结果返回给你。**所以在前面的例子中，可以返回 handleClick 来达到存储函数的目的。

所以 `useCallback` 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用。而 `useMemo` 更适合经过函数计算得到一个确定的值，比如记忆组件。

```js
function Parent({ a, b }) {
  // Only re-rendered if `a` changes:
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  // Only re-rendered if `b` changes:
  const child2 = useMemo(() => <Child2 b={b} />, [b]);
  return (
    <>
      {child1}
      {child2}
    </>
  )
}
```
当 `a/b `改变时，`child1/child2` 才会重新渲染。从例子可以看出来，只有在第二个参数数组的值发生变化时，才会触发子组件的更新。


## 引用

- https://github.com/happylindz/blog/issues/19
## 今日图 - 图解 HTTP 状态码
![fsdsdsdfs.png](../../images/fsdsdsdfs.png)
