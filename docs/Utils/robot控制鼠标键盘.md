# robot控制鼠标键盘
> 咱没有用到实际场景，先记录
## 环境要求
- 当前运行环境 MacOs node:v16.14.1
- node版本需要v16
## 源码运行
```js
const opn = require('opn');     //执行语句 也可直接使用node自带的child_process；用来执行操作文件的语句
var robot = require("robotjs");   //控制鼠标键盘等操作
// 想更牛的话可以写个开机自动执行该文件，不用再 node 文件名.js 了
var screenSize = robot.getScreenSize();
console.log(screenSize)

// Get mouse position.
var mouse = robot.getMousePos();

// Get pixel color in hex format.Hello World
// Hello World

var hex = robot.getPixelColor(mouse.x, mouse.y);
console.log("#" + hex + " at x:" + mouse.x + " y:" + mouse.y);
// Type "Hello World" then press enter.


robot.moveMouseSmooth(109, 324);  //移动鼠标
robot.setMouseDelay(1000)
robot.mouseClick();  //鼠标点击
// Type "Hello World".
// robot.typeString("Hello World");

// Press enter.
// robot.keyTap("enter");
// robot.moveMouseSmooth(screenSizHello Worlde.width-140, screenSize.height-560);
// robot.setMouseDelay(2000)
// robot.mouseClick()
// robot.moveMouseSmooth(screenSize.width-140, screenSize.height-490);
// robot.setMouseDelay(1000)
// robot.mouseClick()

// opn('C:/Users/seagm/Desktop/小白入门手册.txt');   //自动打开程序（文件地址自己修改即可）
// opn('C:/Users/seagm/Desktop/GitHub Desktop')
// opn('C:/Users/seagm/Desktop/Visual Studio Code')
// opn('', {app: 'chrome'});
// setTimeout(()=>{opn('C:/Program Files (x86)/Tencent/WeChat/WeChat.exe')},2000)
// opn('C:/Users/seagm/Desktop/小白入门手册.txt');   //自动打开程序（文件地址自己修改即可）
// opn('C:/Users/seagm/Desktop/GitHub Desktop')
// opn('C:/Users/seagm/Desktop/Visual Studio Code')
// opn('', {app: 'chrome'});

// setTimeout(()=>{opn('C:/Program Files (x86)/Tencent/WeChat/WeChat.exe')},2000)

```
