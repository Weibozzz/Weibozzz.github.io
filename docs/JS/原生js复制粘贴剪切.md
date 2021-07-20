# 原生js复制粘贴剪切
## 复制
```html
<div class="source" contenteditable="true">Try copying text from this box...</div>
<div class="target" contenteditable="true">...and pasting it into this one</div>
```
```js
const source = document.querySelector('div.source');

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});
```
### 兼容性
chrome58

## 粘贴
例子

```html
<div class="source" contenteditable="true">Try copying text from this box...</div>
<div class="target" contenteditable="true">...and pasting it into this one</div>
```
```js
const target = document.querySelector('div.target');

target.addEventListener('paste', (event) => {
    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();

    const selection = window.getSelection();
    if (!selection.rangeCount) return false;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));

    event.preventDefault();
});
```
### 兼容性
chrome58

## 剪切
例子

```html
<div class="source" contenteditable="true">Try copying text from this box...</div>
<div class="target" contenteditable="true">...and pasting it into this one</div>
```
```js
const source = document.querySelector('div.source');

source.addEventListener('cut', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    selection.deleteFromDocument();
    event.preventDefault();
});
```
### 兼容性
chrome58
## 参考

- [复制](https://developer.mozilla.org/en-US/docs/Web/API/Element/copy_event)
- [粘贴](https://developer.mozilla.org/en-US/docs/Web/API/Element/paste_event)
- [剪切](https://developer.mozilla.org/en-US/docs/Web/API/Element/cut_event)
- [getSelection()](https://developer.mozilla.org/zh-CN/docs/Web/API/Selection)
## 今日图 - 每个人挺高逼自己一把
![169fc27e0fdf4d09.webp](../../images/169fc27e0fdf4d09.webp)
