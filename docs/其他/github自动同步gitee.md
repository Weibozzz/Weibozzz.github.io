## Github Pages Action


由于 `Gitee Pages` 的访问速度很快，同步 `github` 到 `gitee`

**注意：前提是 `github` 和 `gitee` 都已经配置了 `ssh` **,如果没配置，看我 [ssh是什么](./ssh是什么.md) 来配置即可。

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
