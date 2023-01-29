const webp=require('webp-converter');
const glob=require('glob');
const path=require('path');
const crypto=require('crypto');
const fs = require('fs-extra')
const hashPath = resolve('./hash.json')
function resolve(filePath){
  return path.join(__dirname, filePath);
}
function getHashJson(filePath){
  const isExist = fs.pathExistsSync(filePath)
  if(!isExist){
    fs.ensureFileSync(filePath)
    fs.writeJsonSync(filePath, {})
  }
  return fs.readJsonSync(filePath);
}
function getFileHash(filePath){
  const hash = crypto.createHash('md5')
  return fs.readFile(filePath).then(buffer => {
    hash.update(buffer)
    const md5 = hash.digest('hex')
    return md5;
  });
}

// console.log(getHashJson(resolve('./hash.json')))
function createWebp(inputImage, outputImage){
  return new Promise((resolve, reject) => {
    webp.cwebp(inputImage, outputImage,"-q 80").then(res => {
      console.log('res:', res, inputImage)
      resolve()
    }).catch(err => {
      reject()
    })
  });
}
function clearWebp (hashJson, newHashJson) {
  let count = 0;
  Object.keys(hashJson).forEach(hashKey => {
    if (!newHashJson[hashKey]) {
      const relativePath = hashKey
        .replace(/png$/, 'webp')
        .replace(/jpe?g$/, 'webp');
      const notNeedFilePath = resolve(relativePath)
      try {
        fs.removeSync(notNeedFilePath)
        count += 1
      } catch (error) {
      }
      console.log(`${count}个文件已被清除！`)
      fs.writeJsonSync(hashPath, newHashJson, {
        spaces: 2
      })
    }
  })
}
function getImgPath(){
  let result = []
  const arr = ['jpg', 'png', 'jpeg']
  arr.forEach(v => {
    result.push(v)
    result.push(v.toUpperCase())
  })
  // https://www.npmjs.com/package/glob
  return resolve(`./images/ps/*.@(${result.join('|')})`);
}
async function createWebpAndHash(){
  const newHashJson = {}
  const files = glob.sync(getImgPath())
    .map(_path => path.normalize(_path))
  // console.log(files)
  const hashJson = getHashJson(hashPath)
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    // console.log(file)
    const relativePath = path.join(__dirname, './')
    // console.log(relativePath)
    const relativeFilePath = file.replace(relativePath, '/')
    // console.log(relativeFilePath)
    const { dir, ext, base, name } = path.parse(file)
    // console.log(path.parse(file))
    const hash = await getFileHash(file)
    newHashJson[relativeFilePath] = hash
    // console.log(hash)
    const oldHash = hashJson[relativeFilePath]
    const webpPath = `${dir}/${name}.webp`
    const isExist = fs.pathExistsSync(webpPath)
    if(!oldHash || oldHash !==hash || !isExist){
      hashJson[relativeFilePath] = hash
      // console.log('input', `${dir}/${base}`)
      // console.log('output', webpPath)
      try {
        await createWebp(`${dir}/${base}`, webpPath)
      } catch (err) {
        throw Error('报错了')
      }
    }
  }
  fs.writeJsonSync(hashPath,hashJson, {
    spaces: 2
  })
  clearWebp(hashJson, newHashJson)
}
createWebpAndHash()
