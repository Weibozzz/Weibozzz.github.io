## 查看homebrew安装的服务列表
```sh
brew services list
```
### 查看安装路径

```sh
brew list nginx
```

## mysql
### 安装
```sh
brew install mysql
```
### 启动
```sh
sudo mysql.server start
```
此时可能会报错：
```sh
Starting MySQL
. ERROR! The server quit without updating PID file (/usr/local/var/mysql/xxxxx.local.pid).
```

这是由于权限问题造成的
可以通用一下命令修改权限

```sh
sudo chmod -R a+rwx /usr/local/var/mysql
```
再执行

`sudo mysql.server start`

显示

```sh
Starting MySQL
. SUCCESS!
```
启动成功

配置
启动后，需要对mysql进行一些配置，可以通过以下命令进行初始化：
```sh
/usr/local/opt/mysql/bin/mysql_secure_installation
```

### 关闭
```sh
sudo mysql.server stop
```
### 重启
```sh
sudo mysql.server restart
```

### 连接navicat报错

```sh
Client does not support authentication protocol

```

解决

```sh
ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; #修改加密规则 （这行我没有写，不过貌似也可以）

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; #更新一下用户的密码 

FLUSH PRIVILEGES; #刷新权限

```

报错 `1130 - Host XXX is not allowed to connect to this MySQL server`

解决

```bash
mysql -u root -p
use mysq;
select host from user where user='root';
update user set host = '%' where user ='root' #将Host设置为通配符%
flush privilegs #刷新权限

```

## 安装java
```sh
brew cask install java
```

## maven

```sh
brew search maven
brew info maven
brew install maven
```

## redis

1.安装redis
```sh
brew install redis
```
2.启动redis服务
```sh
brew services start redis 或 redis-server /usr/local/etc/redis.conf
```

3.关闭redis服务
```sh
brew services stop redis
```

4.重启redis服务
```sh
brew services restart redis
```

5.打开图形化界面
```sh
redis-cli
```
## tomcat

搜索`tomcat`是否存在：

```sh
brew search tomcat
```

安装`tomcat：`
`brew install tomcat`
检查是否安装成功：
`catalina -h`
运行`tomcat`：
`catalina run`

`Tomcat`的默认端口是8080，如果运行成功可通过http://localhost:8080访问
`webapp`的根目录`(CATALINA_HOME)为:/usr/local/Cellar/tomcat/7.0.33/libexec/webapps/ROOT/`

## nginx

`brew install nginx`

- 启动`nginx`服务
`sudo brew services start nginx`
利用`http://localhost:8080`进行访问, 如果出现如下界面，说明启动成功.

- 重启`nginx`服务
`sudo brew services restart nginx`
- 查看`nginx`版本
`nginx -v`
- 关闭`nginx`服务
`sudo brew services stop nginx`
另外几个比较方便的指令

- 重新加载`nginx`
- 停止`nginx`
`nginx -s stop`

- 文件说明
```sh
/usr/local/etc/nginx/nginx.conf #（配置文件路径）

/usr/local/var/www #（服务器默认路径）

/usr/local/Cellar/nginx/1.8.0 #（安装路径)
```






## 今日图 - 前端真是越来越简单了啊
![16b9358b7d5d09b1.png](../../images/16b9358b7d5d09b1.png)
