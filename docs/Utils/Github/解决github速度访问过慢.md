# 解决github速度访问过慢

`Github`　作为全球最大的代码托管平台和开源社区，它的服务器在国外，所以一直存在访问速度过慢、甚至有时候无法访问的问题，非常让人头疼！！！慢有时候还可以忍受，但是对于最近几天发生的大片地区无法正常访问 `Github` 的问题，就必须有一个好的方法去解决了。

## 解决方案一：使用Gitee的镜像仓库

大家都知道国内正在积极推动开源社区的发展，其中 `Gitee` 就是我们国家支持推动的国内开源生态系统，经过这么多年的发展，大部分实用的仓库都可以在 `Gitee` 上找到镜像，而且由于其服务器是在国内，所以访问速度非常快速！！

##　解决方案二：配置本地的Hosts文件
原理： 绕过DNS解析，直接使用本地的DNS记录进行直接跳转。

1. [DNS查询](http://ping.chinaz.com/github.com)

    ![](../../../images/github-actions/ping1.png)
   
2. 选择TTL和响应时间都比较小的两个响应IP
   
    ![](../../../images/github-actions/ping2.png)

3. 修改HOST
使用管理员权限打开位于 C:\Windows\System32\drivers\etc 下的 `hosts` 文件 ，末尾添加对应的IP映射。

### Add to Github node
15.164.81.167 github.com   #改为当下查询最快的节点IP
52.74.223.119 github.com   #改为当下查询最快的节点IP

4. 刷新本地DNS缓存 使用 Win+R 输入 cmd ，打开命令提示符，输入：`ipconfig /flushdns`

## 思考
其他类似的网站遇到如此情况也可以利用这种方法
## 链接
- https://gitee.com/china-fanxin/china-fanxin/blob/main/docs/_posts/05.%E4%B8%B4%E6%97%B6%E7%AC%94%E8%AE%B0/04.%E4%B8%80%E5%88%86%E9%92%9F%E8%A7%A3%E5%86%B3Github%E8%BF%9E%E6%8E%A5%E6%85%A2%E6%88%96%E8%80%85%E6%97%A0%E6%B3%95%E8%BF%9E%E6%8E%A5%EF%BC%8C%E4%BA%B2%E6%B5%8B%E6%9C%89%E6%95%88%EF%BC%81%EF%BC%81.md
