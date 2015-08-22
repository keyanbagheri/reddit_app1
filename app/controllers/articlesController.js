var Article = require('../models/Article');

function index(request, response) {
		Article.find(function(error, articles) {
			if (error) console.error('could not get articles b/c:', error);

			response.json(articles);
		})
	}

	function show(request, response) {
		var id = request.params.article_id

		Article.findById(id, function(error, article){
			if (error) console.error('could not get the article');

			response.json(article);
		});
	}

	function update(request, response) {
		var id = request.params.article_id
		var data = request.body;

		Article.findById(id, function(error, article){
			if (error) console.error('could not update article');

			Object.keys(data).forEach(function(key){
				article.set(key, data[key]);
			});

			article.save(function(error) {
				if (error) console.error('could not patch');

				response.json({message: 'article was successfully updated'});	
			});
		})
}

	module.exports= {
		index: index,
		show: show,
		update: update
	}