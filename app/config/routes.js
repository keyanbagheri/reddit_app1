var express = require('express');
var apiRouter = express.Router(); // get an instance of express router
var articlesController = require('../controllers/articles');

// bring in our model so we can do things to it
var Article = require('../models/article');

// param middleware is called before use middleware
// use param to refactor findById code
apiRouter.param('article_id', articlesController.articleById);

// configure router middleware
apiRouter.route('/articles')

  .post(articlesController.create)

  .get(articlesController.index);

apiRouter.route('/article/:article_id')

  .get(articlesController.show)

  .patch(articlesController.update)

  .delete(articlesController.destroy);

module.exports = apiRouter;