const fs = require('fs')
const getPath = require('./util').getPath
const createBlog = require('../.config/deploy').createBlog
const updateReadme = require('./update').updateReadme
function createDoc (fileName) {
  const file = `${fileName}.md`
  const path = getPath('../docs', file)
  if (!fileName) {
    console.log('创建文件的文件名不能为空')
    return
  }
  fs.access(path, fs.constants.F_OK, (err) => {
    if (!err) {
      console.log(file + '文件已存在！')
      return
    }
    const addImage = `
## 今日图
![](../images/)
    `
    const data = new Uint8Array(Buffer.from(addImage.trim()))
    fs.writeFile(path, data, (err) => {
      if (err) throw err
      console.log(file + '文件已被保存')
      updateReadme(process.argv[2], process.argv[3])
    })
  })
}
createDoc(process.argv[2], process.argv[3])
if (process.argv[4] === 'y') {
  createBlog(process.argv[2])
}
