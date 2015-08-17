var http = require('http');

http.createServer(function (request, response) {
  response.end('Everything works!');
}).listen(3000);

console.log('Server is running on port 3000');