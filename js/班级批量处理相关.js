const fs = require('fs')
const files = fs.readdirSync('.')
const map_1204 = require('F:\\Desktop\\temp\\map_1204')

function 批量重命名() {
  files.forEach((file_name) => {
    const arr = file_name.split('.')
    map_1204.some((student) => {
      const reg = new RegExp(student.name)
      if (reg.test(arr[0])) {
        const newName = student.order + student.name + (arr[1] ? '.' + arr[1] : '')
        fs.renameSync(file_name, newName)
        return true
      }
      return false
    })
  })
}

function 查看谁没交作业() {
  map_1204.forEach(v => {
    let find = false
    files.forEach(f => {
      if (f.match(v.name)) {
        find = true
      }
    })
    if (!find) console.log(v.name)
  })
}

function 查看哪个文件没有名字() {
  files.forEach(v => {
    let flag = false
    map_1204.forEach(n => {
      if (v.match(n.name)) flag = true
    })
    if (!flag) console.log(v)
  })
}

function 查看重复名字的文件() {
  map_1204.forEach(n => {
    let nums = 0
    let repeat = []
    files.forEach(v => {
      if (v.match(n.name)) {
        nums++
        repeat.push(v)
      }
    })
    if (nums > 1) {
      console.log(repeat)
    }
  })
}