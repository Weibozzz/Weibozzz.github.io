# linux常用操作
## 进入 linux 服务器
```shell script
# 用户名@ip地址
ssh -p 22 root@xx.xx.xx.xx
```
## 上传下载
```shell script
# 上传到服务器
scp /Users/xx/xx.zip root@xx.xx.xx.xx:/opt/xx
# 从服务器下载文件到本地当前文件夹 并命名为test.sql
scp -r root@xx.xx.xx.xx:/root/xx.sql test.sql
```
## 文件操作
```
ren *.png *.jpg  重命名文件

touch nash 创建文件

cp test test2    复制文件

cp -rv textCopt testCopt2  复制文件夹 -r -v进度

mv move testCopt/      移动文件

mv test testCopt/movetest  移动文件并且重命名

mv nash nash2  重命名

rm shanchu   删除

rm -r shanchu   删除文件夹

rm -ri shanchu   交互式 带提示删除文件夹

mkdir wenjiajia 创建文件夹

rmdir wenjiajia 删除非空文件夹

pwd 当前文件路径

rm -rf a 删除a文件夹

ll 列出文件详情

cat 文件查看

head 文件的前面部分查看 或者  head -n 1 a.js 看前一行

tail 文件的后面部分查看 或者  head -n 2 a.js 看后两行

grep ' 2' a.js  搜索带2的那一行
```
## 日期查看
```
date 查看日期

date date +%Y--%m--%d    2017--07--16

date -s "11:26:00" 修改时间

clock（hwclock）显示硬件时间

cal 查看日期

uptime 系统运行时间 负载
```
## 输入输出
```
echo 输出一样的

cat 输出文本内容

more 空格向下翻页

less 上下翻页

head 显示文件默认头十行  -n指定几行

tail 末尾几行    -n指定最后几行 -f追踪显示文件的更新（一般用于查看日志，命令不会退出）

```
## 查看硬件信息
```
lspci 查看PCI设备 -v查看详细信息

lsusb 查看USB设备

lsmod查看加载的模块（驱动）

```


## 关机，重启
```
shutdown -h关机 -r重新启动

-h  now

-h  +10 10分钟后关机

-h  23:30

-r  now

poweroff 立即关机

reboot立即重启
```
## 文件归档
```shell script
#安装unzip
yum install -y unzip zip
```

```
zip test 文件名     压缩文件

unzip test.zip  解压

gzip

tar -cvf 名字.tar  文件      创建归档

tar -xvf 名字.tar

tar -cvzf  名字.tar.gz   归档并压缩 调用了gzip


```
## 文件查找
```
locate 快速查找文件，文件夹

updatedb 手动更新数据库

find 查找位置 查找参数

find .-name *test* 包括

find / -name *.conf  找到结尾的

-name

-perm

-user

-group

-ctime

-type

-size

```
## VIM模式  esc退出
```
-命令模式

-插入模式 Y

-ex模式  ：

命令模式下：

i 光标前插入

o 当前行下插入新行

dd 删除整行

yy 复制当前行

n+yy 复制多行

p 将缓冲区的粘贴

u 撤销上一个操作

r 替换当前字符

/ 查找关键字 n键移动
```
## EX模式
```
：w 保存当前模式

：q 退出

：q! 强制退出，不保存

：x 保存并退出

：set number 显示行号

：！系统命令 执行一个系统命令显示结果

：sh 切换到命令行，使用ctrl+d切换回vim

```
## 关闭端口占用命令
关闭端口占用命令 eg:
```
1. netstat -nao | findstr “8080” 查询8080端口
2. taskkill /pid 3017 /F 关闭pid为3017的进程
```

详解 ↓ 但往往很多时候只需要查看某个端口的使用情况，它到底被那个进程（对应PID）占用了，或者你还需要把它`Kill`掉。

如果你在`Windows`操作系统，你可以使用`netstat`命令来查询`PID`，然后可以打开任务管理器，查看这个PID对应的进程名；如果PID没有显示，菜单》查看》选择列》选中PID即可；得知进程后，我们可以将进程杀掉。

下面我简单描述一下我所了解的在`Windows`和`Linux`系统下处理方式。（假如我们需要确定谁占用了我们的8080端口）

1、Windows平台 在windows控制台窗口下执行： 查询8080端口 `netstat -nao | findstr “8080”`

`TCP 127.0.0.1:9010 0.0.0.0:0 LISTENING 3017` 你看到是PID为3017的进程占用了8080端口，如果进一步你想知道它的进程名称，你可以使用如下命令：`tasklist | findstr “3017” `

如果你想杀死这个进程，你当然可以用前面描述的那种方法，在任务管理器里把它`KILL`了，但如果你喜欢高效一点，那么用`taskkill`命令就可以了。`taskkill /pid 3017 /F`那么这个进程就灰灰湮灭了


## 今日图 - 没有了他的总决赛
![weweew.gif](../../images/weweew.gif)
