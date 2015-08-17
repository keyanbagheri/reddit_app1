var express = require('express'); // bring in express
var app = express(); // app is an instance of express
var apiRouter = express.Router(); // get an instance of express router
var bodyParser = require('body-parser'); // express is an extremely minimalist framework so we need body-parser to help us handle req.body
var mongoose   = require('mongoose');

// connect to local database
mongoose.connect('mongodb://localhost:27017/reddit');
// listen for connection errors
mongoose.connection.on('error', function(error) {
  console.error('Could not connect to MongoDB b/c:', error);
});
// bring in our model so we can do things to it
var Article = require('./app/models/article');

// configure body-parser
app.use(bodyParser.urlencoded({ extended: true })); // handle urleconded bodies; extended true means in any form (not just key-value pairs)
app.use(bodyParser.json()); // only parsing json

// configure router middleware
apiRouter.route('/articles')

  .post(function(request, response) {
    // create a new article based of user data
    var article = new Article(request.body);

    // save the article
    article.save(function(error) {
      if (error) console.error('Not able to create article.');

      response.json({message: 'Article successfully created'});
    });
  })

  .get(function(request, response) {
    Article.find(function(error, articles) {
      if (error) console.error('Could not retrieve articles b/c:', error);

      response.json(articles);
    });
  });

// apply router middleware
// and give a namespace
app.use('/api', apiRouter);

app.listen(3000); // tell the app to listen on port 3000

console.log('Server is running on port 3000');