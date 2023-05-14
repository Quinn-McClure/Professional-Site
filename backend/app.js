const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const router = express.Router();

app.use(express.static(path.join(__dirname, 'frontend')));
app.use('/v1', router);

app.get('/about-me', function (req, res) {
  const pageData = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">[LOGO]</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/about-me">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/resume">Resume</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact-me">Contact Me</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    <h1>Second Page</h1>
    <p>This is the content of the second page.</p>`
  ;
  res.send(pageData);
});

router.get('/', (req, res) => {
  //app.use(express.static(path.join(__dirname, 'frontend')));
  //res.sendFile(path.join(__dirname+'/frontend/index.html'));
  router.use(express.static(path.join(__dirname, 'frontend')));
  res.send('Hello World!');
});

//about me endpoint
router.post('/about-me', function(req, res) {
  router.use(express.static(path.join(__dirname, 'frontend')));
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});