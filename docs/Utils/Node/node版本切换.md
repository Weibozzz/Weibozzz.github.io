# node版本切换
## node版本切换：nvm
```
// 安装方式有两种：
$ curl https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh
//或者
$ wget -qO- https://raw.github.com/creationix/nvm/v0.4.0/install.sh | sh

以上脚本会把nvm库clone到~/.nvm，然后会在~/.bash_profile, ~/.zshrc或`~/.profile末尾添加source，安装完成之后，你可以用以下命令来安装node
$ nvm install x.x.x

// 使用指定的版本
$ nvm use x.x.x

// 查看当前已经安装的版本
$ nvm ls
.nvm
->  vx.x.x

// 查看正在使用的版本
$ nvm current
vx.x.x

// 指定某个版本来执行文件
$ nvm run x.x.x some.js

// 卸载nvm
$ rm -rf ~/.nvm
```
## node版本切换：nvs
> 跨平台

### 安装
- [nvs/releases](https://github.com/jasongin/nvs/releases)

### 使用
```
# 安装镜像
nvs remote node https://npm.taobao.org/mirrors/node/

nvs --help

# 查看已安装的版本
nvs ls
```
