# 你想要的git都有
## git命令
## 在Mac上配置全局的Git忽略文件

```sh
vim ~/.gitignore_global
git config --global core.excludesfile ~/.gitignore_global
```

## 获取
这些在 `shell` 脚本中会很有用
- 获取当前用户名：`git config user.name`
- 获取当前分支: `git symbolic-ref --short HEAD`
- git获取最近一次提交的commit id:`git rev-parse HEAD`
- git获取tag最大值:'git describe --tags `git rev-list --tags --max-count=1`'
- git获取所有tag(包括提交信息-n):`git tag -l -n`
- git获取某分支最近提交时间(处理一些僵尸分支):`git log -1 --date=iso <branchName>`
- 显示所有远程分支 并且已合并到master分支的分支:`git branch -r --merged master`
## 正常提交
```bash
git add .
git commit -m "提交内容"
git pull
git push origin 分支名
```
## 初始化
设置用户名，邮箱
```bash
git config --global user.name "Author Name"
git config --global user.email "Author Email"
```
查看邮箱用户名等选项
```bash
gitc onfig --list
```

初始化一个Git仓库，使用`git init`命令。
第一步，使用命令`git add .`,添加全部 ，注意，可反复多次使用，添加多个文件；
第二步，使用命令`git commit -m "提交的注释"`，完成。


运行`git status`命令看看结果
运行`git diff`这个命令可查看我们修改了什么内容
第一步：`git add .`
第二步：`git commit -m "写改动的注释"`

### 移仓库，同时保留原有的提交记录和分支
https://github.com/haizlin/fe-interview/issues/2150
```
git clone --bare 旧库地址
git push --mirror 新库地址
```

## 版本回退
通过`git log`来查看版本（加上`--pretty=oneline`参数查看关键信息）：
`git`中，用`HEAD`表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个^比较容易数不过来，所以写成`HEAD~100`。

`HEAD`指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令`git reset --hard commit_id`。
穿梭前，用`git log`可以查看提交历史，以便确定要回退到哪个版本。
要重返未来，用`git reflog`查看命令历史，以便确定要回到未来的哪个版本。
### 删除之前的提交记录
找到提交的`commit_id `,
先`git checkout <commit_id>`，然后`git push origin <commit_id> --force`,这个要慎重，删除了就没有了。


## 工作区和暂存区
前面讲了我们把文件往Git版本库里添加的时候，是分两步执行的：
第一步是用`git add`把文件添加进去，实际上就是把文件修改添加到暂存区；
第二步是用`git commit`提交更改，实际上就是把暂存区的所有内容提交到当前分支。


## 撤销修改
**git reflog 记录每一次操作，可进行回滚**
**git 优雅的撤销中间某次提交？**
[https://blog.csdn.net/u013066244/article/details/79920012](https://blog.csdn.net/u013066244/article/details/79920012)

**有时候我们希望只合并某个分支上的某次修改commit到指定的分支上.那么就可以使用`cherry-pick`命令来操作了.**

使用git log 查看提交的信息,记住commit id.

git checkout 要修改的分支

git cherry-pick 某个commit id   // 把某个commit id的提交合并到当前分支.


在修改了文件之后，且还没有`add`之前，可执行以下命令丢弃工作区的修改。
```bash
$ git checkout –- readme.txt
```
`git checkout -- file`命令中的`--`很重要，没有`--`，就变成了“切换到另一个分支”的命令，我们在后面的分支管理中会再次遇到`git checkout`命令

如果你想要修改，已经`git add`到暂存区，但还没有`commit`的内容。
我们可以用命令`git reset HEAD file`可以把暂存区的修改撤销掉（unstage），重新放回工作区：
```bash
$ git reset HEAD readme.txt
```
`git reset`命令既可以回退版本，也可以把暂存区的修改回退到工作区。当我们用`HEAD`时，表示最新的版本。
### 丢弃文件命令
- `git checkout .` # 丢弃所有修改或删除，不影响新增或未跟踪的文件。会递归下级目录
- `git clean -nxdf` # dry-run，先看下即将删除那些文件，再执行下面的危险命令
- `git clean -df` # 删除所有未跟踪的文件和目录（不包含.gitignore的文件），危险命令
- `git clean -xdf` # 删除所有未跟踪的文件和目录（同时包含.gitignore的文件），危险命令
###  将当前提交撤回到commitB_hash
```bash
git reset –-hard commitB_hash
```
###  将工作区，暂存区强制恢复成 commitB_hash的状态
```bash
git reset  commitB_hash
```
[Git的4个阶段的撤销更改](https://segmentfault.com/a/1190000011969554#articleHeader7)

## git stash用法
### 保存当前修改
`git stash` 会把所有未提交的修改（包括暂存的和非暂存的）都保存起来，用于后续恢复当前工作目录。`stash` 是本地的，不会通过 `git push` 命令上传到 `git server` 上。
### 重新应用缓存的stash
可以通过 `git stash pop` 命令恢复之前缓存的工作目录，这个指令将缓存堆栈中的第一个stash删除，并将对应修改应用到当前的工作目录下

或者 `git stash apply {stashID}`
### 查看现有stash
可以使用 `git stash list` 命令， 点击查看[更多stash用法](https://www.cnblogs.com/tocy/p/git-stash-reference.html)。
### 恢复 stash
使用 `git stash clear` 误删除找回

`git log --graph --oneline --decorate  $( git fsck --no-reflog | awk '/dangling commit/ {print $3}')` 调出 `stash` 的 `log`，该 `log` 对应 `stash` 的栈缓存纪录，`WIP` 为 `midify` 内容，`index` 为 `add` 内容，所以，一般情况下，`WIP` 比 `index` 内容要全

然后执行 `git stash apply {id}` 恢复最后 `stash` 的内容
至此，`stash` 被删除的内容全部被找回


## 删除文件
一般情况下，你通常直接在文件管理器中把没用的文件删了，或者用`rm`命令删了：
```bash
$ rm test.txt
```
这个时候，`Git`知道你删除了文件，因此，工作区和版本库就不一致了，`git status`命令会立刻告诉你哪些文件被删除了：
现在你有两个选择，一是确实要从版本库中删除该文件，那就用命令`git rm`删掉，并且`git commit`：


另一种情况是删错了，因为版本库里还有呢，所以可以很轻松地把误删的文件恢复到最新版本：
```bash
$ git checkout -- test.txt
```
`git checkout`其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。


## 分支管理
git查看当前分支所属
```bash
git branch -vv
```
创建与合并分支
首先创建`dev`分支，然后切换到`dev`分支
```bash
$ git checkout –b dev
git checkout - #(-代表上一个分支名，这里是简写)
Switched to a new branch 'dev'
```
git checkout命令加上-b参数表示创建并切换，相当于以下两条命令：
```bash
$ git branch dev
$ git checkout dev
# Switched to branch 'dev'
```
`git branch –a` 查看当前仓库的所有分支；`git branch –r`查看远程仓库的所有分支


`dev`分支的工作成果合并到`master`分支上：
```bash
$ git merge dev
```

```bash
git merge [branchName] --squash
```
将 `branchName` 合并到当前分支，并将 `branchName` 上的所有提交合并成一次提交
### rebase
- git pull --rebase origin [branchName] = git fetch + git rebase
```bash
// 假设当前分支dev, commit 为 a b c d e
// 假设master分支, commit 为 a b f g h
git pull --rebase origin master
// 当前分支dev commit 变为 a b c d e f g h

```
- git rebase master
```bash
// 假设当前分支dev, commit 为 a b c d e
// 假设master分支, commit 为 a b f g h
git rebase origin/master
// 当前分支dev commit 变为 a b f g h c d e

```
- git rebase -i HEAD~10 调整最近10次提交的日志、或合并多次提交为1次，让log更好看更清晰
### 修改分支
如果对于分支不是当前分支，可以使用下面代码：


```bash
 git branch -m 原名 新
```
如果是当前，那么可以使用加上新名字
```bash
git branch -m 原名
```
### 混乱的分支
报错`$ git checkout -b ***
fatal: cannot lock ref 'refs/heads/***': 'refs/heads/***' exists; cannot create 'refs/heads/user/***'`
```bash
git remote prune origin
```
### Git创建一个空分支
```shell
git checkout --orphan emptyBranchName
git rm -rf .
```
## git提交空文件夹
创建 `.gitkeep` 文件，内容如下

```
# Ignore everything in this directory
*
# Except this file !.gitkeep
```
## gerrit
- [gerrit-guide](https://lipeng1667.github.io/2017/01/18/gerrit-guide/)
- 新建分支 `git push origin HEAD:new-branch`
- 提交分支 `git push origin HEAD:/refs/for/new-branch`
### 常见报错
- no changes `git commit --amend`
## 小结
- 查看分支：`git branch`

- 创建分支：`git branch `

- 切换分支：`git checkout `

- 创建 切换分支：`git checkout -b `

- 合并某分支到当前分支：`git merge `

- 删除本地分支：`git branch -D 分支名`
- 删除远程分支：` git push origin --delete 分支名`
- 提交：`git branch origin 远程分支名称`
### 误删分支
不小心删除了远程的分支，如何恢复？

查看 `git reflog` ，找到恢复的 `commitid`

`git reflog --date=iso`

`git reflog` 用来记录你的每一次命令，--date=iso 表示以标准时间显示
**如果已删除的分支是落后于远程分支的，就不适用这种方法**。

#切出分支
git checkout -b feature_EMR2.2.2_guoba commitid
然后再推到远端就有了。

## 自定义Git
配置命令别名
本节是教你如何偷懒的。
如果敲`git st`就表示`git status`那就简单多了，当然这种偷懒的办法我们是极力赞成的。
我们只需要敲一行命令，告诉`Git`，以后`st`就表示`status`：
```bash
git config --global alias.st status
git config --global alias.pl pull
git config --global alias.ps push
git config --global alias.ci commit
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cp cherry-pick
git config --global alias.ss stash
```
当然还有别的命令可以简写，很多人都用`co`表示`checkout`，`ci`表示`commit`，`br`表示`branch`

## 其它技巧
之前上传过的文件夹已经提交过了，新加的 `.ignore`不起作用，
 想要忽略怎么办？执行这个，然后正常提交ok
`git rm -r --cached .`

查看某一段代码谁写的 `git blame file.js -L 1,2`

### 忽略操作系统尾部换行符
从 `Windows` 更换到 `Mac`，`pull` 代码下来修改完提交时 ，提交一个 `CRLF` 文件到仓库上，这个 `CRLF` 其实是不同操作系统的尾部换行符的格式，`CRLF` 是 `Carriage Return Line Feed` 的缩写，中文意思是回车换行，`LF` 是 `Line Feed` 的缩写，中文意思是换行

假如你正在 `Windows` 上写程序，又或者你正在和其他人合作，他们在 `Windows` 上编程，而你却在其他系统上，在这些情况下，就可能会遇到行尾结束符问题，这是因为 `Windows` 使用回车和换行两个字符来结束一行，而 `Mac` 和 `Linux` 只使用换行符一个字符。虽然这是小问题，但它会极大地扰乱跨平台协作，在提交时产生非常多的冲突。

解决： `git config --global core.autocrlf true`

- true `x -> LF -> CRLF` `Git` 可以在你提交时自动地把行结束符 `CRLF` 转换成 `LF` ，而在签出代码时把 `LF` 转换成 `CRLF` 。设置 `core.autocrlf` 来打开此项功能，如果是在 `Windows` 系统上，就把它设置成 `true` ，这样当签出代码时，`LF` 会被转换成 `CRLF`
- input `x -> LF -> LF`  `Linux` 或 `Mac` 系统使用 `LF` 作为行结束符，因此你不想 `Git` 在签出文件时进行自动的转换；当一个以 `CRLF` 为行结束符的文件不小心被引入时你肯定想进行修正，把 `core` . `autocrlf` 设置成 `input` 来告诉 `Git` 在提交时把 `CRLF` 转换成 `LF` ，签出时不转换, 这样会在 `Windows` 系统上的签出文件中保留 `CRLF` ，会在 `Mac` 和 `Linux` 系统上，包括仓库中保留 `LF`
- false  `x -> x -> x` 如果你是 `Windows` 程序员，且正在开发仅运行在 `Windows` 上的项目，可以设置 `false` 取消此功能，把回车符记录在库中

## 安全重命名

`git mv <old-name> <new-name>`

## 并入你最近的一次 commit

`git commit --amend --no-edit`

这条命令会把你暂存的修改并入你最近的一次 commit，并且不会修改这次 commit 的信息（
这样 Git 也就不会打开一个文件编辑界面了。
它最经常的用途是修改刚刚提交的 commit。也许我太粗心了，
总是在刚提交完一条 commit 还不到 30 秒，就发现一个拼写错误或者忘了删除了调式信息了


## 撤销远程操作
已经提交到远程了，不想要了，怎么办？

```bash
git reset --hard [commit_id]
git push origin [分支名]
```
这个操作非常危险，如果别人也提交了，他的也会不存在


## git 子模块
### 克隆所有子模块
```bash
git clone --recursive git://github.com/foo/bar.git
```

如果已经克隆了

```bash
git submodule update --init --recursive
```
 ### 添加
为当前工程添加submodule，命令如下
```bash
git submodule add 仓库地址 路径
```
其中，仓库地址是指子模块仓库地址，路径指将子模块放置在当前工程下的路径。
注意：路径不能以 / 结尾（会造成修改不生效）、不能是现有工程已有的目录（不能順利 `Clone`），不写路径默认当前文件夹

命令执行完成，会在当前工程根路径下生成一个名为“`.gitmodules`”的文件，其中记录了子模块的信息。添加完成以后，再将子模块所在的文件夹添加到工程中即可。

### 删除
`submodule`的删除稍微麻烦点：首先，要在“`.gitmodules`”文件中删除相应配置信息。然后，执行“`git rm –cached` ”命令将子模块所在的文件从git中删除。

### 下载的工程带有submodule
当使用`git clone`下来的工程中带有`submodule`时，初始的时候，`submodule`的内容并不会自动下载下来的，此时，只需执行如下命令：
```bash
git submodule update --init --recursive
```
即可将子模块内容下载下来后工程才不会缺少相应的文件。

### 修改子模块并提交
进入子模块目录下，进行`git add . `,`git commit -m ""`,`git push origin origin`操作
最后在主模块提交
### 添加ssh
- [ssh是什么](../../Utils/Linux/ssh是什么.md)
### git 钩子
`pre-commit` 钩子在键入提交信息前运行。 它用于检查即将提交的快照，例如，检查是否有所遗漏，确保测试运行，以及核查代码。 如果该钩子以非零值退出，Git 将放弃此次提交，不过你可以用 `git commit --no-verify `来绕过这个环节。 你可以利用该钩子，来检查代码风格是否一致（运行类似 lint 的程序）、尾随空白字符是否存在（自带的钩子就是这么做的），或新方法的文档是否适当。

```json
"pre-commit": [
    "lint"
  ],
  "scripts": {
    "lint": "eslint --ext .js, src",
    "lint:fix": "npm run lint -- --fix"
  },
```
git提交前会验证lint命令

更多查看[https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md)

在线学习git使用 [https://learngitbranching.js.org/](https://learngitbranching.js.org/)

## 今日图
![16a8d22958e71066.png](../../../images/16a8d22958e71066.png)
