var mongoose = require('mongoose');
var Article = require('../../models/article');

mongoose.connect('mongodb://localhost:27017/reddit');

mongoose.connection.collections['articles'].drop( function(err) {
  if (err) console.error(err);
  console.log('collection dropped');
  mongoose.connection.close()
});