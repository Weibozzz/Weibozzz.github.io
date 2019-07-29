## new URLSearchParams
`URLSearchParams` 接口定义了一些实用的方法来处理 URL 的查询字符串。

一个实现了 `URLSearchParams` 的对象可以直接用在 `for...of` 结构中

示例
```js
var paramsString = "q=URLUtils.searchParams&topic=api"
var searchParams = new URLSearchParams(paramsString);

for (let p of searchParams) {
  console.log(p);
}

searchParams.has("topic") === true; // true
searchParams.get("topic") === "api"; // true
searchParams.getAll("topic"); // ["api"]
searchParams.get("foo") === ""; // true
searchParams.append("topic", "webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=api&topic=webdev"
searchParams.set("topic", "More webdev");
searchParams.toString(); // "q=URLUtils.searchParams&topic=More+webdev"
searchParams.delete("topic");
searchParams.toString(); // "q=URLUtils.searchParams"
```

**缺点：不支持IE**

摘自 https://developer.mozilla.org/zh-CN/docs/Web/API/URLSearchParams

##  new FormData(form)

`FormData()`构造函数用于创建一个新的`FormData`对象。

示例
```html
<form id="myForm" name="myForm">
  <div>
    <label for="username">Enter name:</label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc">Enter account number:</label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile">Upload file:</label>
    <input type="file" id="userfile" name="userfile">
  </div>
<input type="submit" value="Submit!">
</form>
//注意: 所有的输入元素都需要有name属性，否则无法访问到值。

var myForm = document.getElementById('myForm');
formData = new FormData(myForm);
```
**缺点：兼容ie10+**

摘自：https://developer.mozilla.org/zh-CN/docs/Web/API/FormData/FormData

## js浮点数解决办法

```js
function strip(num, precision = 12) {
  return +parseFloat(num.toPrecision(precision));
}
```
- https://github.com/camsong/blog/issues/9
## 今日图 - 一波操作后
![16b55dd6cf188092.gif](../../images/16b55dd6cf188092.gif)
