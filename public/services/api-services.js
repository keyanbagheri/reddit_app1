angular.module('reddit')

.factory('apiService', ['$http', function($http) {
  return {
    index: function() {
      return $http.get('/api/articles')
      .then(function(response) {
        var articles = response.data;

        return articles
      });
    },
    show: function(articleId) {
      return $http.get('/api/article/' + articleId)
      .then(function(response) {
        var article = response.data;

        return article
      });
    },
    create: function(article) {
      $http.post('/api/articles', article);
    }
  }
}]);