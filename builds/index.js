const fs = require('fs')
const { exec } = require('child_process')
const { targetToPath, targetPath, ignoreFiles } = require('./config')

function init(){
  const checkout = 'git checkout gh_pages'
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
        ps()
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
            await copyFile(`${targetPath}\\${file}`, targetToPath)
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
            const filePath = `${targetToPath}\\${file}`
            logger(`正在删除 ${filePath}`)
            await delFile(filePath)
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
function ps(){
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
        return
      }
      console.log(stdout)
      console.log('提交成功!')
    })
}
