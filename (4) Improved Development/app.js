const http = require('http');

const routes = require('./routes');

console.log(routes.someText);

const server = http.createServer(routes.handler);

server.listen(3000);

/**
 * NPM - Node Package Manager (installed automatically with Node)
 *  - Can be used to add some extra features to Node project
 *
 * JSON - based on JavaScript objects, keys are in b/w double quotation marks as well as the values except for numbers or arrays or true/false.
 */
