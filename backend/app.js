const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const router = express.Router();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/frontend/index.html'));
  //res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})