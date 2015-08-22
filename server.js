var express = require('express'); // express module
var app = express(); // defining our app as an instance of express
var apiRouter = express.Router();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var articlesController = require('./app/controllers/articlesController');
var config = require('./app/config/config');
var environmentSettings = config. config();

mongoose.connect(environmentSettings.db)

var Article = require('./app/models/Article');

app.use(bodyParser.urlencoded( {extended: true}));
app.use(bodyParser.json());

apiRouter.route('/articles')

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response){
	response.sendfile('./public/views/index.html');
})

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




app.use(apiRouter);

var port = process.env.PORT || 7000;

app.listen(port);

console.log('Server is running on port', port);

