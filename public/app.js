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
    });

    // catchall
   $urlRouterProvider.otherwise('/');

}])

.controller('redditController', ['$scope', function($scope) {
  $scope.foo = 'hehehe';
}])

.controller('newArticleController', ['$scope', '$http', function($scope, $http) {
  $scope.createArticle = function() {
    console.log('article:',$scope.article);
    $http.post('/api/articles', $scope.article);
  }
}]);