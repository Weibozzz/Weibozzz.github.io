# mac使用
## sh 进入服务器

进入服务器 `ssh -p 端口号 服务器用户名@ip`例如： `ssh -p 22 liuweibo@111.11.11.11`
回车，到这会让你输入yes或者no来确认是否连接，输入yes回车,然后输入在服务器上的用户密码回车,到此进入的是你在服务器上的账户的目录，即为连接成功

## mac下记一次教训－慎用rm －rf

使用 `rmtrash` 替代rm命令，`mac`下可用：

```sh
brew install rmtrash
```

用`rmtrash` 替代 `rm`，`rmtrash`有个好处，它不会立马把资料从你电脑上删除，而是移动到废纸篓，如果误删，可以在废纸篓中恢复。

## mac使用快捷键
`command+n` 快速打开当前

## 从`Terminal` 中用 `Finder` 打开当前路径的文件夹

`open .`

## 在`mac`中如何用命令行打开`webstorm`

webstorm，在`”Tools” -> “Create Command Line Launcher…” `设置命令

## 在 Mac 上使用命令打开 VS Code
打开 `VS Code`，打开控制面板（`⇧⌘P`）,输入 `‘shell command’`，在提示里看到 `Shell Command: Install 'code' command in PATH`，运行它就可以了。

之后就可以在终端中输入 `code .`，使用 `VS Code` 打开当前文件夹。
或者直接使用 `code filename `编辑文件。



## finder显示隐藏文件
### 第一种:
在 macOS Sierra及以上(Mojave)，我们可以使用快捷键 `⌘⇧.(Command + Shift + .)` 来快速（在 Finder 中）显示和隐藏隐藏文件了。
###  第二种:
在终端使用:

```bash
//显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -bool true
//不显示隐藏文件
defaults write com.apple.finder AppleShowAllFiles -bool false

```
最后需要重启`Finder`:

重启Finder：窗口左上角的苹果标志-->强制退出-->Finder-->重新启动



## 文件夹加权限

1. cd 你的文件夹路径的上一级目录。
2. `sudo chmod -R 777` 你的文件夹名。
3. 输入密码。
4. 成功

## linux命令使用
### 查看文件安装路径,比如：查看git安装路径
```bash
which git
```
### 文件操作
- `ren *.png *.jpg`  重命名文件

- `touch nash` 创建文件

- `cp test test2`    复制文件

- `cp -rv textCopt testCopt2`  复制文件夹 `-r -v`进度

- `mv move testCopt/ `     移动文件

- `mv test testCopt/movetest`  移动文件并且重命名

- `mv nash nash2 ` 重命名

- `rm shanchu`   删除

- `rm -r shanchu`   删除文件夹

- `rm -rf a` 删除a文件夹

- `rm -ri shanchu`   交互式 带提示删除文件夹

- `mkdir wenjiajia` 创建文件夹

- `rmdir wenjiajia` 删除非空文件夹

- `pwd` 当前文件路径

- `ll` 列出文件详情
- `ls -lh` 查看文件大小详情

- `cat` 文件查看

- `head` 文件的前面部分查看 或者  `head -n 1 a.js` 看前一行

- `tail` 文件的后面部分查看 或者  `head -n 2 a.js` 看后两行

- `grep ' 2' a.js ` 搜索带2的那一行

## 今日图 - margin-right: -5px
![16bcfa33dd0226d4.png](../../images/16bcfa33dd0226d4.png)
