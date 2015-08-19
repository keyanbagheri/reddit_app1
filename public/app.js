// we need to inject the third-party library, ui-router
angular.module('reddit', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('articles', {
      url: '/',
      templateUrl: './views/articles.html', // you can link to a view by using the property templateUrl opposed to template
      controller: 'redditController' // connect to a controller by referring to its name
    })

    .state('new', {
      url: '/new',
      templateUrl: './views/new.html',
      controller: 'newArticleController'
    })

    .state('article', {
      url: '/article/:id',
      templateUrl: './views/article.html',
      controller: 'articleController'
    });

    // catchall
   $urlRouterProvider.otherwise('/');

}])

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