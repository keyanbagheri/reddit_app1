var apiRouter = express.Router();

apiRouter.route('/articles')

	.post(function(request, response){
		console.log(request.body);
		var article = new Article(request.body);

		article.save(function(error) {
			if (error) console.error('Could not create b/c:', error);

			response.json({message: 'Article successfully created'});
		});
	})

	.get(articlesController.index);

apiRouter.route('/article/:article_id')

// this is for getting a single resource
	.get(articlesController.show)


	.patch(articlesController.update);