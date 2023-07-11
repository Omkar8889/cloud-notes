const connectTOMongo =require('./db');
const express = require('express')

connectTOMongo();
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
