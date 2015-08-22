angular.module('reddit')

.directive('panelHeader', function(favoriteService) {
  return {
    restrict: 'E',
    scope: {
      article: '='
    },
    templateUrl: '/views/directives/panel-header.html',
    link: function(scope) {
      // console.log(scope.article)
    }
  }
})