const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')
const rimraf = require('rimraf')
const { targetToPath, targetPath, ignoreFiles } = require('./config')

function init(){
  const branch = process.argv[2] === 'gitee' ? 'gh_pages_gitee' : 'gh_pages'
  const checkout = `git checkout ${branch}`
  const reset = 'git reset --hard && git clean -df'
  const pl = 'git pull'
  const path = `cd ${targetToPath}`
  const sh = `${path} && ${checkout} && ${reset} && ${pl}`
  // const sh = `ls`
  exec(
    sh,
    async (error, stdout, stderr) => {
      if (error) {
        return
      }
      console.log(stdout)
      try {
        await delFiles()
        ps(branch)
      } catch (error) {
      }
    })
}
init()
function logger(info){
  console.log(info)
}
// 删除文件
async function delFile (file) {
  return new Promise((resolve, reject) => {
    exec(
      `rm -rf ${file}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
  })
}
// 复制文件
async function copyFile (file, targetToPath) {
  return new Promise((resolve, reject) => {
    logger(`正在复制文件 ${file}`)
    exec(
      `cp -r ${file} ${targetToPath}`,
      (error, stdout, stderr) => {
        if (error) {
          reject(error)
          return
        }
        resolve()
      })
  })
}
async function copyFiles (targetPath, targetToPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(targetPath, async (err, files) => {
      if (err) {
        reject(err)
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (ignoreFiles.indexOf(file) === -1) {
          try {
            await copyFile(path.normalize(`${targetPath}/${file}`), targetToPath)
          } catch (error) {
          }
        }
      }
      resolve()
    })
  })
}
function delFiles(){
  return new Promise((resolve, reject) => {
    fs.readdir(targetToPath, async (err, files) => {
      if (err) {
        reject(err)
        return
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if(ignoreFiles.indexOf(file) === -1){
          try {
            const filePath = `${targetToPath}/${file}`
            logger(`正在删除 ${path.normalize(filePath)}`)
            rimraf.sync(filePath)
          } catch (error) {
          }
        }
      }
      logger('删除完毕')
      try {
        logger('正在复制替换文件')
        await copyFiles(targetPath, targetToPath)
      } catch (error) {
        return
      }
      logger('复制替换完毕!')
      resolve()
    })
  });
}
function ps(branch){
  const add = 'git add .'
  const commit = 'git commit -m deploy'
  const ps = 'git push -f'
  const path = `cd ${targetToPath}`
  const sh = `${path} && ${add} && ${commit} && ${ps}`
  console.log('正在提交……')
  exec(
    sh,
    (error, stdout, stderr) => {
      if (error) {
        console.log('提交失败', error)
        return
      }
      console.log(stdout)
      console.log('提交成功!')
      console.log(`分支${branch}提交成功!`)
    })
}
