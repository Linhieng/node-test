const express = require('express')
const multer = require('multer')
const cors = require('cors')

const app = express()
const port = 3030

app.listen(port, () => {console.log(port)})
app.use(cors())

const storage = multer.diskStorage({
  destination: './files',
  filename: (req, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`)
  }
})

const fileFilter = (req, file, callback) => {
    const reg = /^image\/.+/
    if (reg.test(file.mimetype))
      callback(null, true)
    else 
      callback(new Error('only upload image'), false)
  }
const multerUpload = multer({storage, fileFilter}).single('singleImage')

app.post('/upload', multerUpload, (req, res) => {
  res.send('ok')
})