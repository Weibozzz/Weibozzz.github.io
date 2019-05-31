## client***属性（clientWidth、clientHeight）:
包括padding、content部分，不包括border
![http://images.liuweibo.cn/image/common/client20180923154518_1537688734938_34950_1537688836699.png](http://images.liuweibo.cn/image/common/client20180923154518_1537688734938_34950_1537688836699.png)
## offset***属性（offsetWidth、offsetHeight、offsetTop、offsetLeft）：
元素的offsetHeight是一种元素CSS高度的衡量标准，包括元素的边框、内边距和元素的水平滚动条（如果存在且渲染的话），不包含:before或:after等伪类元素的高度。
![http://images.liuweibo.cn/image/common/offset20180923154817_1537688903922_34074_1537688910187.png](http://images.liuweibo.cn/image/common/offset20180923154817_1537688903922_34074_1537688910187.png)

>这个属性值会被四舍五入为整数值，如果你需要一个浮点数值，请用` element.getBoundingClientRect()`.

## getBoundingClientRect()
返回元素的大小及其相对于视口的位置。

![http://images.liuweibo.cn/image/common/getBoundingClientRect20180923154748_1537688872731_5156_1537688880905.png](http://images.liuweibo.cn/image/common/getBoundingClientRect20180923154748_1537688872731_5156_1537688880905.png)

摘自：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetHeight)


## 今日图 - 你不知道的暗网
![resize.jpg](../images/resize.jpg)
