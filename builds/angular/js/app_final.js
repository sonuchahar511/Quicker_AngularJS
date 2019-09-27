var myApp = angular.module('myApp', [
  'ngRoute',
  'myControllers'
]);

myApp.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
 // $locationProvider.hashPrefix("");
  $routeProvider
    .when('/', {
      templateUrl: 'js/partials/search_final.html',
      controller: 'SearchController'
    })
    .when('/details/:itemId', {
        templateUrl: 'js/partials/details_final.html',
        controller: 'DetailsController'
      });
}]);

