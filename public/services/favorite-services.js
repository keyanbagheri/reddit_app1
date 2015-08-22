angular.module('reddit')

.service('favoriteService', function() {
  this.favorites = [];

  this.saveFavorite = function(article) {
    this.favorites.push(article)
  }
});