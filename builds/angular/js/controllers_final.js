var myControllers = angular.module('myControllers', []);

myControllers.controller('SearchController', 
  function MyController($scope, $http) {
    $http.get('js/data.json').then(function(response) {
      $scope.artists = response.data;
      $scope.artistOrder = 'name';
  });
});

myControllers.controller('DetailsController', 
  function MyController1($scope, $http, $routeParams) {
    $http.get('js/data.json').then(function(response) {
      $scope.artists = response.data;

      $scope.whichItem = $routeParams.itemId;

      var itemId=Number($routeParams.itemId);

      if(itemId>0){
        $scope.prevItem=itemId-1;
      }else{
        $scope.prevItem=$scope.artists.length-1;
      }

      if(itemId<$scope.artists.length-1){
        $scope.nextItem=itemId+1;
      }else{
        $scope.nextItem=0;
      }
  });
});