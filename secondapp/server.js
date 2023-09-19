const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('This is the Second App - modified with a new message.');
});

app.listen(port, () => {
  console.log(`Second app listening at http://localhost:${port}`);
});
