// Creating a server through Node.js

/**
 * We need to import some functionality because the way JS works for both the Browser and Node.js, there are handful of functions and objects we can use globally without importing anything into the file.
 *
 * But generally, most functionalities aren't available by default -
 *  - to not pollute our global namespace with all reserved keywords
 *  - to make it obvious in each file on which functionalities that file depends.
 */
const http = require("http");

/*
1.
function reqListener(req, res) {}
http.createServer(reqListener);
// reqListener will now run for every incoming request to our server.
*/

/*
2.
Anonymous function
http.createServer(function (req, res) {
  console.log(req);
});
*/

// 3.
const server = http.createServer((req, res) => {
  console.log(req);
  // to quit the process
  // process.exit();
});

server.listen(3000);

// process.exit() - hard exited our event loop and thus program shuts down