const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();


mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb+srv://sabuj_1:qwerty1234@cluster0-mar6m.mongodb.net/node-angular?retryWrites=true&w=majority", function() { /* dummy function */ })
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
  post.save();
  res.status(201).json({
    message: 'Post added!'
  });// SUCCESS + A new resource created

});

app.get('/api/posts', (req, res, next) => {

  Post.find()
  .then( documents => {
    res.status(200).json({
      message: 'Posts fetched successfully',
      posts: documents
    });
  });
});

app.delete('/api/posts/:id', (req,res,next) => {
    console.log(req.params);
    res.status(201).json({
      message: "DELETED Post Successfully !!!"
    });
});

module.exports = app;
