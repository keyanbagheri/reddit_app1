var express = require('express'); // bring in express
var app = express(); // app is an instance of express

// http GET endpoint that sends back json
app.get('/', function (request, response) {
  response.json({message: 'Success!'});
});

app.listen(3000); // tell the app to listen on port 3000

console.log('Server is running on port 3000');