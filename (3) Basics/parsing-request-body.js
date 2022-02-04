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
    // when receiving a posted message before sending the response and before writing to file, we want
    //  to get our request data
    const body = []; // request body we're working with
    req.on('data', (chunk) => {
      // hover over on - event data receives a 'chunk' of data
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end', () => {
      // here we can say that all chunks have been read and stored in the body
      // now to work with all these chunks, we need to 'buffer' that
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);

      const messageByUser = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', messageByUser);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello from Node.js server</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);

/**
 * We move writeFileSync into the end function as -
 *  if not moved, it would actually run before callback function of end event is called because on('end') we just register a function to be called in future (not executed immediately)
 *
 * Node does not wait and pause i.e does not block the script execution, it just registers the function as a to-be-executed action and continues below code.
 *
 * THUS, if we have something that depends on the incoming data, we must move it into the event listener too so that it does not run too early.
 *
 * This was the entire raw logic - later we use Express.js that hides(abstracts) all this from us
 */
