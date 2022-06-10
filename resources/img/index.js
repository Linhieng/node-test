const fs = require('fs')
const dir = fs.readdirSync(__dirname)
let x = 1
dir.forEach(e => {
  if (e.substring(e.lastIndexOf('.')) === '.jpg') {
    fs.renameSync(e, `${_format(x++)}.jpg`)
  }
})
function _format(num) {
  if (num <= 9) return `0${num}`
  return num
}