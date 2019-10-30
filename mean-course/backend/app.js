const express = require('express');
const app = express();


app.use('/api/posts', (req, res, next) => {

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
