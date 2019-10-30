const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb+srv://sabuj:qwerty1234@cluster0-mar6m.mongodb.net/test?retryWrites=true&w=majority", function() { /* dummy function */ })
.then(() => {
  console.log('GOOD');
})
.catch(err => { // mongoose connection error will be handled here
  console.log('BAD');
});
// .then(
//   () => {console.log('MongoDB Cloud Connected!!!');},
//   err => { console.log('Error! MOngoDB Cloud broke !!');  }
//   );


const Post = require('./models/post'); // mongoose post model import
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

app.use((req,res,next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  next();
});

app.post('/api/posts', (req,res,next) => {
  // const post = req.body;
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
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
      content: 'Go to Sleep'
    },
    {
      id: "fdsfdfdsfsdf",
      title: 'Second post',
      content: 'Wake Up and LeetCode'
    },
  ];

  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });

});

module.exports = app;
