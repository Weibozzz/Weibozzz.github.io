# github自动同步gitee
## Github Pages Action


由于 `Gitee Pages` 的访问速度很快，同步 `github` 到 `gitee`

[解决github速度访问过慢](./解决github速度访问过慢.md)

**注意：前提是 `github` 和 `gitee` 都已经配置了 `ssh`** ,如果没配置，看我 [ssh是什么](./ssh是什么.md) 来配置即可。

## 1. 同步部署
> 提交 github 自动同步提交到 gitee

1. 点击 actions
2. 建立 GITEE_RSA_PRIVATE_KEY
3. 复制粘贴任务
4. 提交即可

### 1.1 点击 actions
![点击 actions](../../images/github-actions/step1.png)
### 1.2 建立 GITEE_RSA_PRIVATE_KEY
点击右上角 `New repository secret`

![新建](../../images/github-actions/step2.png)

1. `Name` 输入 `GITEE_RSA_PRIVATE_KEY`
2. `Value` 输入 `ssh` 的 `私钥`(注意是私钥，`cat id_rsa`)
### 1.3 复制粘贴任务
**复制下方粘贴进去**

```
name: Sync

on: page_build

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Sync to Gitee
        uses: wearerequired/git-mirror-action@master
        env:
          # 注意在 Settings->Secrets 配置 GITEE_RSA_PRIVATE_KEY
          SSH_PRIVATE_KEY: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}
        with:
          # 注意替换为你的 GitHub 源仓库地址
          source-repo: git@github.com:Weibozzz/Weibozzz.github.io.git
          # 注意替换为你的 Gitee 目标仓库地址
          destination-repo: git@gitee.com:Weibozzz/Weibozzz.github.io

```
### 1.4 右上角提交
## 2. 部署同时build 示范

```
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v2.3.1 # If you're using actions/checkout@v2 you must set persist-credentials to false in most cases for the deployment to work correctly.
        with:
          persist-credentials: false
      - name: Install and Build
        run: |
          npm install
          npm run docs:build
      - name: Deploy
        uses: JamesIves/github-pages-deploy-action@4.1.4
        with:
          ACCESS_TOKEN: ${{ secrets.GITEE_RSA_PRIVATE_KEY }}
          BRANCH: gh_pages
          FOLDER: docs/.vuepress/dist/
```

## 3. github 发布到 GitHub Pages
- http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html

## 关于限制和免费额度

`GitHub Actions` 对于个人账号，每个月有 2000 分钟的免费额度 普通的一次 `GitHub Action` 执行需要 2-3 分钟，2000 / 3 = 666次提交，足足满足一天 22 次的改动提交，几乎没有任何顾虑。

当账号使用量达到 75% 的时候，Github 会发送邮件提醒：
`You've used 75% of included services for the xxx account`

- [关于 GitHub 操作的计费](https://docs.github.com/cn/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
- [查看个人已用量](https://github.com/settings/billing)

## 相关资源资料
### 官方资料
- https://docs.github.com/cn/actions
  
### 网友总结
- http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html
- https://gitee.com/yanglbme/gitee-pages-action#https://github.com/yanglbme/gitee-pages-action
- https://gyx8899.gitbook.io/blog/share/syncgithubtogitee
