const getPath = require('./util').getPath
const fs = require('fs')
function updateReadme (fileName = process.argv[3], title = process.argv[2]) {
  const file = getPath('../README.md')
  if (!title) {
    console.log(`${title}不存在readme文件中`)
    return
  }
  fs.readFile(file, (err, data) => {
    const reg = new RegExp('(##\\s+[' + title + '].[^##]+)', 'g') // /(##\s+[HTML].[^##]+)/g
    if (err) throw err
    let fileText = data.toString()

    if (!fileText.match(reg)) {
      console.log(`title:${title},fileName:${fileName}`)
      console.log(fileName + '标题不存在')
      return
    }
    const nowMdTextData = fileText.replace(reg, (...args) => {
      return `${args[1].trimEnd()}\n+ [${fileName}](./docs/${title}/${fileName}.md)\n\n`
    })
    const nowMdText = new Uint8Array(Buffer.from(nowMdTextData))
    fs.writeFile(file, nowMdText, (err) => {
      if (err) throw err
      console.log(`${title}:README.md文件已更新`)
    })
  })
}
module.exports = {
  updateReadme: updateReadme
}
