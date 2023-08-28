# node版本切换
## node版本切换：nvm
### mac
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
### window
下载地址：https://github.com/coreybutler/nvm-windows/releases
## node版本切换：nvs
> 跨平台
>

用 `nvm` 安装 `node` 之后，如果每次启动终端的时候都要使用固定的版本 则使用输入命令 `nvm alias default stable` 就不需要每次 `nvm use v16.14.1`

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
### use bash or zsh
> 自动切换node版本
> 
vim ~/.zshrc  ，添加下面的。
```
# place this after nvm initialization!
autoload -U add-zsh-hook
load-nvmrc() {
  local node_version="$(nvm version)"
  local nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$node_version" ]; then
      nvm use
    fi
  elif [ "$node_version" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}
add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

然后 `source ~/.zshrc`
- https://github.com/nvm-sh/nvm#deeper-shell-integration
