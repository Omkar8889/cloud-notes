const connectTOMongo =require('./db');
const express = require('express');

connectTOMongo();
const app = express();
const port = 5000

app.use(express.json());

app.use('/api/auth/', require('./routes/auth'))
app.use('/api/Notes', require('./routes/Notes'))
app.get('/', (req, res) => {
  res.send('Hello!')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
