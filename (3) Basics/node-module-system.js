const http = require('http');
const routes = require('./routes');

// const server = http.createServer((req, res) => {
// });

const server = http.createServer(routes); // execute function stored in routes for incoming requests
// SECOND WAY - routes.handler

server.listen(3000);

/**
 * We create a new file for all our routing logic - routes.js
 *  In that file, we have all our if statements and default response code
 *
 * Now, we somehow need to connect app.js to routes.js (because we need to be able to send our incoming request to that file)
 *  - For that we create a new function in routes.js (requestHandler), which must receive request and response as arguements, just as our http.createServer()
 *  - We move entire code within this handler.
 *
 * NOW, we just need to export this handler. (import using require() syntax ... export ??)
 *  - In routes.js
 */

/**
 * NOTE - (about node module system)
 * The file content (one which is being exported) is cached by Node and we cannot edit it externally.
 * If we somehow redefine routes as an object and try to add a new property, it will not work i.e. routes.js is basically inaccessible from the outside.
 */
