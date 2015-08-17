var express = require('express');
var apiRouter = express.Router(); // get an instance of express router

// bring in our model so we can do things to it
var Article = require('../models/article');

// param middleware is called before use middleware
// use param to refactor findById code
apiRouter.param('article_id', function(request, response, next, id) {
  Article.findById(id, function(error, article) {
    if (error) console.error('Could not update article b/c:', error);

    request.article = article; // store article in request
    next(); // callback to move onto next handler
  });
});

// configure router middleware
apiRouter.route('/articles')

  .post(function(request, response) {
    // create a new article based of user data
    var article = new Article(request.body);

    // save the article
    article.save(function(error) {
      if (error) console.error('Not able to create article b/c:', error);

      response.json({message: 'Article successfully created'});
    });
  })

  .get(function(request, response) {
    Article.find(function(error, articles) {
      if (error) console.error('Could not retrieve articles b/c:', error);

      response.json(articles);
    });
  });

apiRouter.route('/article/:article_id')

  .get(function(request, response) {
    response.json(request.article);
  })

  .patch(function(request, response) {
    var data = request.body;
    var article = request.article

    Object.keys(data).forEach(function(key) {
      article.set(key, data[key]); // set replaces the value of a field with the specified value
    });

    article.save(function(error) {
      if (error) console.error('Could not update article b/c:', error);

      response.json({message: 'Article successfully updated'});
    });
  })

  .delete(function(request, response) {
    Article.remove({ _id: request.params.article_id }, function(error) {
      if (error) console.error('Could not delete article b/c:', error);

      response.json({message: 'Article successfully deleted'});
    })
  });

module.exports = apiRouter;