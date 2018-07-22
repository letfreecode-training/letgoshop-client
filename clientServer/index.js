const fs = require('fs');
const path = require('path');
const axios = require('axios');
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();

let html = undefined;
fs.readFile(path.resolve(__dirname, '../build/index.html'), (err, data) => {
  html = data.toString();
});
app.use('/static', express.static(path.resolve(__dirname, '../build/static')));

app.use(cookieParser());

app.get('/', (req, res) => {
  const cookies = req.cookies;
  axios({
    method: 'POST',
    url: 'http://localhost:4001/api/userCheck',
    headers: {
      cookies: JSON.stringify({
        ut: cookies.ut
      })
    }
  })
    .then(response => {
      const data = response.data;
      const replaceHTML = html.replace('"{{userInfo}}"', JSON.stringify(data));
      res.status(200).send(replaceHTML);
    })
    .catch(err => {
      res.status(200).send(html);
    });
});

app.listen(3000, () => console.log('Client server listen on port 3000'));
