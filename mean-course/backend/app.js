const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('First middleware');
  next();
});

app.use((req, res, next) => {
  console.log('Second middleware');
  // next();
  res.send('Hello from the express app!!');
});

module.exports = app;
