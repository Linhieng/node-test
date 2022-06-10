const express = require('express')
const cors = require('cors')

const app = express()

app.listen('1314', () => {console.log('success')})

app.use(express.json())
app.use(cors())

/* === 登录注册 */
app.get('/test/get', (req, res) => {
  console.log('req.query', req.query)
  res.status(200)
  res.send('succeed')
})
app.post('/test/post', (req, res) => {
  console.log('req.data', req.data)
  res.status(200)
  res.send('succeed')
})

app.get('*', (req, res) => {
  console.log('请求路径：', req.path)
  res.send('hello')
})