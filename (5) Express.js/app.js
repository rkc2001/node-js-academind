// const http = require('http');

const express = require('express');

// lot of express logic is in this app constant
const app = express();

// before passing to create the server, we can use middleware functions
app.use((req, res, next) => {
  console.log('In the middleware !');
  next(); // allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('In the second middleware !');
  res.send('<h1>Hello from Express !</h1>');
});

/*
// app is also a valid request handler
const server = http.createServer(app);

server.listen(3000);
*/
app.listen(3000);
