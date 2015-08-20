angular.module('reddit')

.controller('redditController', ['$scope', '$http', 'apiService', function($scope, $http, apiService) {

  $scope.votes = 0;

  apiService.index()
  .then(function(articles) {
    $scope.articles = articles;
  });

  $scope.plusVote = function(article) {
    article.votes++;
    apiService.update(article)
  };

  $scope.minusVote = function(article) {
    article.votes--;
    apiService.update(article)
  };
}])

.controller('newArticleController', ['$scope', '$http', 'apiService', function($scope, $http, apiService) {
  $scope.createArticle = function() {
    apiService.create($scope.article);
  }
}])

.controller('articleController', ['$scope', '$stateParams', '$http', 'apiService', function($scope, $stateParams, $http, apiService) {
  var id = $stateParams.id;

  apiService.show(id)
  .then(function(article) {
    $scope.article = article
  })
}]);