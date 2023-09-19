const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is a Standard App - adding a little more text here for a new commit.');
});

app.listen(port, () => {
  console.log(`Second app listening at http://localhost:${port}`);
});
