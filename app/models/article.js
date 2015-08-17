var mongoose = require('mongoose');
var Schema = require mongoose.Schema; // allows us to create a constructor for our model

var ArticleSchema = new Schema({
  title: String, // define date types
  author: String,
  created_at: Date,
  votes: Number
});

// defines prehook for document
// before each save the created_at value will be set
ArticleSchema.pre('save', function(next){
  this.created_at = new Date();
  next();
});