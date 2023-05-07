const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const router = express.Router();

app.use(express.static(path.join(__dirname, 'frontend')));

app.get('/', (req, res) => {
  //app.use(express.static(path.join(__dirname, 'frontend')));
  //res.sendFile(path.join(__dirname+'/frontend/index.html'));

  res.send('Hello World!');
})

//about me endpoint
app.post('/about-me', function(req, res) {
  
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})