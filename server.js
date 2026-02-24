const express = require('express');
const app = express();

app.get('/login', (req, res) => {
  res.send('ekaterina.man.1997year16');
});

app.get('/deg/:x1/:x2', (req, res) => {
  const x1 = parseFloat(req.params.x1);
  const x2 = parseFloat(req.params.x2);
  if (isNaN(x1) || isNaN(x2)) {
    return res.status(400).send('Invalid numbers');
  }
  const result = Math.pow(x1, x2);
  res.send(`${result}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});