var fs = require('fs');
var path = require('path');
function resolvePath(filename){
  return path.resolve(__dirname, filename)
}

//解析需要遍历的文件夹，我这以E盘根目录为例
var filePath = resolvePath('../docs');

const rootDir = resolvePath('../')
const filesArr = ["/README"]
//调用文件遍历方法
fileDisplay(filePath);

// console.log(filesArr)
indexStr()
function indexStr () {
  const data = fs.readFileSync(resolvePath('../template.html'))
  const str =  data.toString()
    .replace("['自定义path']", JSON.stringify(filesArr))
  fs.writeFileSync(resolvePath('../index.html'), str)
}
/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function fileDisplay(filePath){
  //根据文件路径读取文件，返回文件列表
  const files = fs.readdirSync(filePath);
  //遍历读取到的文件列表
  files.forEach(function(filename){
    //获取当前文件的绝对路径
    var filedir = path.join(filePath,filename);
    //根据文件路径获取文件信息，返回一个fs.Stats对象
    const stats = fs.statSync(filedir)
    var isFile = stats.isFile();//是文件
    var isDir = stats.isDirectory();//是文件夹
    if(isFile){
      filesArr.push(
        filedir.replace(rootDir, '')
          .replace('.md', '')
      )
    }
    if(isDir){
      fileDisplay(filedir);//递归，如果是文件夹，就继续遍历该文件夹下面的文件
    }
  });
}
