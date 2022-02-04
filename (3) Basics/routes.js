const fs = require('fs');

const requestHandler = (req, res) => {
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
};

module.exports = requestHandler;

/**
 * First WAY -
 *  - Go at the bottom and add 'module.exports' [keyword/object exposed globally to us by Node and we can assign a value to it]
 *  - So we set it's value as our requestHandler
 *  - module.exports = requestHandler;
 *  - We can now import from routes.js by requiring it and Node will look for module.exports and see if something was registered for routes.js file.
 *
 * Second WAY -
 *  - Sometimes we export many things by having an object
 *  - module.exports = {
 *      handler : requestHandler,
 *      someText : 'Some hardcoded text'
 *    };
 *  - Now, in app.js routes will be an object and not a function.
 *
 *  (Another way)
 *  - module.exports.handler = requestHandler;
 *  - module.exports.someText = 'Some hardcoded text'
 *
 *  (Shorter way)
 *  - exports.handler = requestHandler;
 *  - exports.someText = 'Some hardcoded text';
 */
