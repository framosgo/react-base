const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, '../dist')))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
