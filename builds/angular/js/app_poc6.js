var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'
]);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'js/partials/search_poc6.html',
        controller:'SearchController'
    });
}]);