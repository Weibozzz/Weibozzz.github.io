# js小技巧
> 下班早小技巧

## 代码块
### 1. 全屏
```js
const fullscreen = (mode = true, el = 'body') =>
  mode
    ? document.querySelector(el).requestFullscreen()
    : document.exitFullscreen();
fullscreen(); // Opens `body` in fullscreen mode
fullscreen(false); // Exits fullscreen mode
```
### 2. 返回数组中的最大值
```js
// 将Math.max()与扩展运算符 (…) 结合使用以获取数组中的最大值。
const arrayMax = arr => Math.max(...arr);
// arrayMax([10, 1, 5]) -> 10
```
### 3. 返回数组中的最小值
```js
// 将Math.min()与扩展运算符 (…) 结合使用以获取数组中的最小值。
const arrayMin = arr => Math.min(...arr);
// arrayMin([10, 1, 5]) -> 1
```
### 4. chunk 将数组块划分为指定大小的较小数组
```js
// 将数组块划分为指定大小的较小数组。

// 使用Array.from()创建新的数组, 这符合将生成的区块数。使用Array.slice()将新数组的每个元素映射到size长度的区块。如果原始数组不能均匀拆分, 则最终的块将包含剩余的元素。

const chunk = (arr, size) =>
Array.from({length: Math.ceil(arr.length / size)}, (v, i) => arr.slice(i * size, i * size + size));
// chunk([1,2,3,4,5], 2) -> [[1,2],[3,4],[5]]
```
### 5. compact 从数组中移除 falsey 值
```js
// 使用Array.filter()筛选出 falsey 值 (false、null、0、””、undefined和NaN).
const compact = (arr) => arr.filter(Boolean);
// compact([0, 1, false, 2, '', 3, 'a', 'e'*23, NaN, 's', 34]) -> [ 1, 2, 3, 'a', 's', 34 ]
```
### 6. countOccurrences 计算数组中值的出现次数
```js
// 使用Array.reduce()在每次遇到数组中的特定值时递增计数器。
const countOccurrences = (arr, value) => arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0);
// countOccurrences([1,1,2,1,2,3], 1) -> 3
```
### 7. deepFlatten 深拼合数组
```js
// 使用递归。使用Array.concat()与空数组 ([]) 和跨页运算符 (…) 来拼合数组。递归拼合作为数组的每个元素。
const deepFlatten = arr => [].concat(...arr.map(v => Array.isArray(v) ? deepFlatten(v) : v));
// deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
```
### 8. difference 返回两个数组之间的差异
```js
// 从b创建Set, 然后使用Array.filter() on 只保留a b中不包含的值.
const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };
// difference([1,2,3], [1,2,4]) -> [3]
```
### 9. distinctValuesOfArray 返回数组的所有不同值
```js
// 使用 ES6 Set和…rest运算符放弃所有重复的值。
const distinctValuesOfArray = arr => [...new Set(arr)];
// distinctValuesOfArray([1,2,2,3,4,4,5]) -> [1,2,3,4,5]
```
### 10. dropElements
```js
// 移除数组中的元素, 直到传递的函数返回true。返回数组中的其余元素。 在数组中循环, 使用Array.shift()将数组的第一个元素除去, 直到函数的返回值为true。返回其余元素。
const dropElements = (arr, func) => {
while (arr.length > 0 && !func(arr[0])) arr.shift();
return arr;
};
// dropElements([1, 2, 3, 4], n => n >= 3) -> [3,4]
```
### 11. everyNth 返回数组中的每个第 n 个元素
```js
// 使用Array.filter()创建一个包含给定数组的每个第 n 个元素的新数组。
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === 0);
// everyNth([1,2,3,4,5,6], 2) -> [ 1, 3, 5 ]
```
### 12. filterNonUnique 筛选出数组中的非唯一值
```js
// 对于只包含唯一值的数组, 请使用Array.filter()。
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
// filterNonUnique([1,2,2,3,4,4,5]) -> [1,3,5]
```
### 13. flatten 拼合数组
```js
// 使用Array.reduce()获取数组中的所有元素和concat()以拼合它们。
const flatten = arr => arr.reduce((a, v) => a.concat(v), []);
// flatten([1,[2],3,4]) -> [1,2,3,4]
```
### 14. flattenDepth 将数组向上拼合到指定深度
```js
// 使用递归, 递减depth, 每层深度为1。使用Array.reduce()和Array.concat()来合并元素或数组。基本情况下, 对于等于1的depth停止递归。省略第二个元素,depth仅拼合到1的深度 (单个拼合)。
const flattenDepth = (arr, depth = 1) =>
depth != 1 ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flattenDepth(v, depth - 1) : v), [])
: arr.reduce((a, v) => a.concat(v), []);
// flattenDepth([1,[2],[[[3],4],5]], 2) -> [1,2,[3],4,5]
```
### 15. groupby 根据给定函数对数组元素进行分组
```js
// 使用Array.map()将数组的值映射到函数或属性名。使用Array.reduce()创建一个对象, 其中的键是从映射的结果生成的。
const groupBy = (arr, func) =>
arr.map(typeof func === 'function' ? func : val => val[func])
.reduce((acc, val, i) => { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {});
// groupBy([6.1, 4.2, 6.3], Math.floor) -> {4: [4.2], 6: [6.1, 6.3]}
// groupBy(['one', 'two', 'three'], 'length') -> {3: ['one', 'two'], 5: ['three']}
```
### 16. initial 返回除最后一个数组之外的所有元素
```js
// 使用 “arr.slice(0,-1)” 返回数组的最后一个元素,也可以为-2 -3等。
const initial = arr => arr.slice(0, -1);
// initial([1,2,3]) -> [1,2]
```
### 17. initializeArrayWithRange 初始化包含指定范围内的数字的数组
```js
// 使用Array(end-start)创建所需长度的数组Array.map()以填充区域中所需的值。可以省略start以使用默认值0.
  const initializeArrayWithRange = (end, start = 0) =>
  Array.from({ length: end - start }).map((v, i) => i + start);
// initializeArrayWithRange(5) -> [0,1,2,3,4]
```
### 18. initializeArrayWithValues 初始化并填充具有指定值的数组
```js
// 使用Array(n)创建所需长度的数组,fill(v)以填充所需的值。可以省略value以使用默认值0.
const initializeArrayWithValues = (n, value = 0) => Array(n).fill(value);
// initializeArrayWithValues(5, 2) -> [2,2,2,2,2]
```
### 19. intersection 返回两个数组中存在的元素的列表
```js
// 从b创建Set, 然后使用Array.filter()on a只保留b中包含的值.
const intersection = (a, b) => { const s = new Set(b); return a.filter(x => s.has(x)); };
// intersection([1,2,3], [4,3,2]) -> [2,3]
```
### 20. sample 返回数组中的随机元素
```js
// 使用Math.random()生成一个随机数, 将它与length相乘, 并使用数学将其舍入到最接近的整数Math.floor()。此方法也适用于字符串。
const sample = arr => arr[Math.floor(Math.random() * arr.length)];
// sample([3, 7, 9, 11]) -> 9
```
### 21. shuffle 随机数组值的顺序
```js
// 使用Array.sort()可在比较器中使用Math.random()重新排序元素。
const shuffle = arr => arr.sort(() => Math.random() - 0.5);
// shuffle([1,2,3]) -> [2,3,1]
```
### 22. similarity 返回两个数组中都显示的元素的数组
```js
// 使用filter()可删除不属于values的值, 使用includes()确定.
const similarity = (arr, values) => arr.filter(v => values.includes(v));
// similarity([1,2,3], [1,2,4]) -> [1,2]

```
### 23. symmetricDifference 返回两个数组之间的对称差
```js
// 从每个数组创建一个Set, 然后对它们中的每一个都使用Array.filter(), 以便只保留其他值中不包含的数值。
const symmetricDifference = (a, b) => {
const sA = new Set(a), sB = new Set(b);
return [...a.filter(x => !sB.has(x)), ...b.filter(x => !sA.has(x))];
}
// symmetricDifference([1,2,3], [1,2,4]) -> [3,4]
```
### 24. bottomVisible 底部可见
```js
// 如果页的底部可见, 则返回true, 否则为false。
// 使用scrollY、scrollHeight和clientHeight来确定页面底部是否可见。
const bottomVisible = () =>
document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight || document.documentElement.clientHeight;
// bottomVisible() -> true
```
### 25. getScrollPosition 返回当前页的滚动位置
```js
// 如果已定义, 则使用pageXOffset和pageYOffset, 否则scrollLeft和scrollTop。可以省略el以使用window的默认值.
const getScrollPosition = (el = window) =>
({x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop});
// getScrollPosition() -> {x: 0, y: 200}
```
### 26. getURLParameters 返回一个包含当前 URL 参数的对象
```js
// 使用match()与适当的正则表达式来获取所有键值对,Array.reduce()可将它们映射并合并到单个对象中。将location.search作为要应用于当前url的参数传递.

const getURLParameters = url =>
url.match(/([^?=&]+)(=([^&]*))/g).reduce(
(a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
);
// getURLParameters('http://url.com/page?name=Adam&surname=Smith') -> {name: 'Adam', surname: 'Smith'}
```
### 27. scrollToTop 平滑滚动到页面顶部
```js
// 使用document.documentElement.scrollTop或document.body.scrollTop从顶部获取距离。从顶部的距离的一小部分滚动。使用window.requestAnimationFrame()对滚动进行动画处理。
const scrollToTop = () => {
const c = document.documentElement.scrollTop || document.body.scrollTop;
if (c > 0) {
window.requestAnimationFrame(scrollToTop);
window.scrollTo(0, c - c / 8);
}
};
```
### 28. capitalizeEveryWord 将字符串中每个单词的首字母大写
```js
// 使用replace()匹配每个单词和toUpperCase()的第一个字符以将其大写。
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
// capitalizeEveryWord('hello world!') -> 'Hello World!'
```
### 29. escapeRegExp 转义要在正则表达式中使用的字符串
```js
// 使用replace()可转义特殊字符。
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
// escapeRegExp('(test)') -> \\(test\\)
```
## 更多
- https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/fullscreen.md
