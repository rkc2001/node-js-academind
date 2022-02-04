const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const messageByUser = parsedBody.split('=')[1];
      fs.writeFile('message.txt', messageByUser, (err) => {
        // console.log(err);
        // the response must be sent only once we're done working with the file
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from Node.js server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);

/** return req.on block -
 *
 * We have an event listener with some method/function that will be executed once we're done parsing the request, and in that function, we have yet another event listener - nested function fs.writeFile(...) which will be executed once we're done writing the file
 *
 * This is the event-driven architechture where we tell Node.js to do something ...
 * It off-loads that process to the OS (which uses multithreading) and continue its event loop to listen for event callbacks and always just dispatch tiny actions to never block the code execution and always come back once an operation is done by the OS.
 * This is the reason why Node.js is 'high-performant' as it never blocks our code, ie never blocks the server.
 *
 *
 */
