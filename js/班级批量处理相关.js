const fs = require('fs')

const dir = fs.readdirSync('.')

const { map_1204 } = require('./1204.private')

dir.forEach((v, i) => {
  const arr = v.split('.')
  map_1204.some((r) => {
    const reg = new RegExp(r.name)
    if (reg.test(arr[0])) {
      const newName = r.order + r.name + '.' + arr[1]
      fs.renameSync(v, newName)
      return true
    } 
    return false
  })

})
