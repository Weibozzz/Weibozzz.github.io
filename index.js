const webp=require('webp-converter');
const glob=require('glob');
const path=require('path');
const crypto=require('crypto');
const fs = require('fs-extra')
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
function getImgPath(){
  let result = []
  const arr = ['jpg', 'png', 'jpeg']
  arr.forEach(v => {
    result.push(v)
    result.push(v.toUpperCase())
  })
  // https://www.npmjs.com/package/glob
  return resolve(`./images/**/*.@(${result.join('|')})`);
}
async function createWebpAndHash(){
  const files = glob.sync(getImgPath())
    .map(_path => path.normalize(_path))
  // console.log(files)
  const hashPath = resolve('./hash.json')
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
}
createWebpAndHash()
