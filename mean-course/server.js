console.log('Hello world');

const http = require('http');

const server = http.createServer((req, res) => {
  res.end('This is my first response');// end the response stream
});

server.listen( process.env.PORT || 3000);
