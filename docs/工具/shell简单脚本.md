前端用 `shell` 可以解决很多繁琐的 `git` 提交，繁琐的打包部署，在这里就简单分享一下
**注意mac下的sh文件和window下的sh文件格式可能会不一样，注意要切换一下，要不然会执行失败**
## 变量

```sh
your_name="qinjx"
echo $your_name
echo ${your_name}
```

## ifelse
新建后缀为 `.sh` 的文件，选用 `git bash` 或者 `linux` 命令工具执行 `sh ifelse.sh`

```sh
# ifeles.sh
#!/usr/bin/env bash
num1=1
num2=2
if test $[num1] -eq $[num2]
then
    echo '两个数字相等!'
else
    echo '两个数字不相等!'
fi
echo "结束"
```

- Shell中的 test 命令用于检查某个条件是否成立
- eq 	等于则为真

## params
获取参数

```sh
#!/usr/bin/env bash
echo "Shell 传递参数实例！";
echo "第1个参数为：$1";
echo "第2个参数为：$2";
echo "第3个参数为：$3";

echo "参数个数为：$#";
echo "传递的参数作为一个字符串显示：$*";
```

## read

```sh
# 获取当前分支 =======
branch=$(git symbolic-ref --short HEAD)
# git提交 =======
git add .
read -p $'\n\n请输入您的commit信息： ' commitInfo
git commit -m ${commitInfo}
```

## 写入文件
```sh
#!/bin/bash

echo "write to file."

echo "iput your name:"
read y_name

echo "Hello,${y_name}" > f_users.txt

```
## 读文件

```sh
#!/bin/bash

cat file(待读取的文件) | while read line
do
    echo $line
done

```


## alias
下面这几个命令，可能是你天天都在敲的。所以，你应该设置成 `alias` 来提高效率

```sh
alias nis="npm install --save "
alias svim='sudo vim'
alias mkcd='foo(){ mkdir -p "$1"; cd "$1" }; foo '
alias install='sudo apt get install'
alias update='sudo apt-get update; sudo apt-get upgrade'
alias ..="cd .."
alias ...="cd ..; cd .."
alias www='python -m SimpleHTTPServer 8000'
alias sock5='ssh -D 8080 -q -C -N -f user@your.server'
```

关闭命令行，发现失效了
### 让其永久生效

`vim ～/.zshrc`

将别名添加进去，保存退出

紧接着执行`source`使其生效
`source ~/.zshrc`
## shell简单命令

- 重命名文件 `mv oldPath newPath`
- 复制文件 `cp -r file targetToPath`
- 删除文件 `rm -rf file`
- 打开文件,支持excel等 `start filePath`

## 参考

- [read](https://www.runoob.com/linux/linux-comm-read.html)
- [shell](https://coolshell.cn/articles/19219.html)
- [读文件](https://www.cnblogs.com/iloveyoucc/archive/2012/07/10/2585529.html)

## 今日图 - 我写的代码到可运行的代码
![16b873fd487172ba.gif](../../images/16b873fd487172ba.gif)
