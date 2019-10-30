const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

app.post('/api/posts', (req,res,next) => {

  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: 'Post added!'
  });// SUCCESS + A new resource created

});

app.get('/api/posts', (req, res, next) => {

  const posts = [
    {
      id: "fdsfd",
      title: 'First post',
      content: 'sfhdkjfhsdkfhdskfhdfjhjdksfhdskfh'
    },
    {
      id: "fdsfdfdsfsdf",
      title: 'Second post',
      content: 'sfhdfdffdkfhdfjhjdksfhdskfh'
    },
  ];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });

});

module.exports = app;
