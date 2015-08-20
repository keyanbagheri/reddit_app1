angular.module('reddit')

.controller('redditController', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/articles')
  .then(function(response) {
    $scope.articles = response.data;
  });
}])

.controller('newArticleController', ['$scope', '$http', function($scope, $http) {
  $scope.createArticle = function() {
    $http.post('/api/articles', $scope.article);
  }
}])

.controller('articleController', ['$scope', '$stateParams', '$http', function($scope, $stateParams, $http) {
  var id = $stateParams.id;

  $http.get('/api/article/' + id)
  .then(function(response) {
    $scope.article = response.data;
  });
}]);