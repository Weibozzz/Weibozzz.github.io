## github api
通过 `github api` 获取 `github` 的相关文件接口

## 获取用户基本信息

https://api.github.com/users/Weibozzz

## 获取文件信息
[get-contents](https://developer.github.com/v3/repos/contents/#get-contents)

- 示例：
https://raw.githubusercontent.com/用户名/仓库/分支/文件 
如获取`config`文件下的`constantTag.js`
https://raw.githubusercontent.com/Weibozzz/next-blog/master/config/constantTag.js

## 仓库信息

- 示例：
https://api.github.com/repos/用户名/仓库
如获取 用户 `Weibozzz` 仓库 `next-blog` 的仓库信息
https://api.github.com/repos/Weibozzz/next-blog

## 仓库提交信息

https://api.github.com/repos/Weibozzz/next-blog/commits
