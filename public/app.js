// we need to inject the third-party library, ui-router
angular.module('reddit', ['ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('articles', {
      url: '/',
      template: '<h3>View all the Articles</h3>'
    })

    // catchall
   $urlRouterProvider.otherwise('/');

}])

.controller('redditController', ['$scope', function($scope) {
  $scope.foo = 'hehehe';
}]);