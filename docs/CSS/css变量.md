# css变量

## 个人理解
在多主题开发模式下，通过 `js` 注入全局 `css` 变量，通过 `css` 关键字 `var` 引用即可
## 使用方法
### 传统使用方法
```css
:root {
  --main-bg-color: pink;
}

body {
  background-color: var(--main-bg-color);
}
```
### 更好的使用方法
```
<style>
    h3{
      font-size: var(--a);
      color: var(--aa);
    }
</style>
<script src="https://cdn.jsdelivr.net/npm/css-vars-ponyfill@2"></script>
<script>
  cssVars({
    // Options...
    variables: {
      '--a': '20px',
      '--aa': '#0f0',
    }
  })
</script>
```
## 资源
- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/var())
- [css-vars-ponyfill](https://github.com/jhildenbiddle/css-vars-ponyfill)
- [css-vars-ponyfill](https://jhildenbiddle.github.io/css-vars-ponyfill/#/)
## 例子
- [css变量示例]()
## 今日图
![](../../images/sddsdsgvff.jpg)
