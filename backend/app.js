const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const router = express.Router();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/v1', router);

router.get('/', (req, res) => {
  //app.use(express.static(path.join(__dirname, 'frontend')));
  //res.sendFile(path.join(__dirname+'/frontend/index.html'));

  res.send('Hello World!');
});

//about me endpoint
router.get('/about-me', function(req, res) {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});