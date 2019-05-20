const path = require('path')
function getPath (...args) {
  return path.resolve(...args)
}
module.exports = {
  getPath: getPath
}
