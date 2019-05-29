## Hook 简介
`Hook` 是 `React 16.8` 的新增特性。它可以让你在不编写 `class` 的情况下使用 `state` 以及其他的 `React` 特性。
## useState
这个例子用来显示一个计数器。当你点击按钮，计数器的值就会增加：
```js
import React, { useState } from 'react';

function Example() {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
`useState` 唯一的参数就是初始 `state`。在上面的例子中，我们的计数器是从零开始的，所以初始 `state` 就是 0。

#### 声明多个 state 变量
你可以在一个组件中多次使用 `State Hook`:
```js
function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}
```

## Effect Hook

你之前可能已经在 `React` 组件中执行过数据获取、订阅或者手动修改过 `DOM`。我们统一把这些操作称为“副作用”，或者简称为“作用”。

`useEffect` 就是一个 `Effect Hook`，给函数组件增加了操作副作用的能力。它跟 `class` 组件中的 `componentDidMount`、`componentDidUpdate` 和 `componentWillUnmount` 具有相同的用途，只不过被合并成了一个 `API`。

可以通知 `React` 跳过对 `effect` 的调用，只要传递数组作为 `useEffect` 的第二个可选参数即可：

例如，下面这个组件在 `React` 更新 `DOM` 后会设置一个页面标题：

```js
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`;
  }[count]); // 仅在 count 更改时更新

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
当你调用 `useEffect` 时，就是在告诉 `React` 在完成对 `DOM` 的更改后运行你的“副作用”函数。由于副作用函数是在组件内声明的，所以它们可以访问到组件的 `props` 和 `state`。默认情况下，`React` 会在每次渲染后调用副作用函数 —— 包括第一次渲染的时候。

**副作用函数还可以通过返回一个函数来指定如何“清除”副作用。**例如，在下面的组件中使用副作用函数来订阅好友的在线状态，并通过取消订阅来进行清除操作：

```js
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```
在这个示例中，`React` 会在组件销毁或者后续渲染重新执行副作用函数时取消对 `ChatAPI` 的订阅。（如果传给 `ChatAPI` 的 `props.friend.id` 没有变化，你也可以告诉 `React` 跳过重新订阅。）

## Hook 使用规则
`Hook` 就是 `JavaScript` 函数，但是使用它们会有两个额外的规则：

- 只能在函数最外层调用 Hook。不要在循环、条件判断或者子函数中调用。
- 只能在 React 的函数组件中调用 Hook。不要在其他 JavaScript 函数中调用。


## 自定义 Hook

有时候我们会想要在组件之间重用一些状态逻辑。目前为止，有两种主流方案来解决这个问题：高阶组件和 `render props`。自定义 `Hook` 可以让你在不增加组件的情况下达到同样的目的。

前面，我们介绍了一个叫 `FriendStatus` 的组件，它通过调用 `useState` 和 `useEffect` 的 `Hook` 来订阅一个好友的在线状态。假设我们想在另一个组件里重用这个订阅逻辑。

首先，我们把这个逻辑抽取到一个叫做 `useFriendStatus` 的自定义 `Hook` 里：

```js
import React, { useState, useEffect } from 'react';

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```
它将 `friendID` 作为参数，并返回该好友是否在线：

现在我们可以在两个组件中使用它：
```js
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{ color: isOnline ? 'green' : 'black' }}>
      {props.friend.name}
    </li>
  );
}
```
这两个组件的 `state` 是完全独立的。`Hook` 是一种复用状态逻辑的方式，它不复用 `state` 本身。事实上 `Hook` 的每次调用都有一个完全独立的 `state` —— 因此你可以在单个组件中多次调用同一个自定义 `Hook`。

自定义 `Hook` 更像是一种约定而不是功能。如果函数的名字以 `“use”` 开头并调用其他 `Hook`，我们就说这是一个自定义 `Hook`。
## 其他Hooks
- useReducer

`useState` 的替代方案。它接收一个形如 `(state, action) => newState` 的 `reducer`，并返回当前的 `state` 以及与其配套的 `dispatch` 方法。（如果你熟悉 `Redux` 的话，就已经知道它如何工作了。）

在某些场景下，`useReducer` 会比 `useState` 更适用，例如 `state` 逻辑较复杂且包含多个子值，或者下一个 `state` 依赖于之前的 `state` 等。并且，使用 `useReducer` 还能给那些会触发深更新的组件做性能优化，因为你可以向子组件传递 dispatch 而不是回调函数 。

以下是用 `reducer` 重写 `useState` 计数器示例：
```js
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

```
- useContext

## 摘自
- https://zh-hans.reactjs.org/docs/hooks-intro.html

## 今日图 - 我喜欢你 React
![pkpjg.gif](../images/pkpjg.gif)
