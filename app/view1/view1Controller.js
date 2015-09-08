'use strict';
 module.exports = function($scope, $http) {
  $http.get('./../data.json')
  .then(function(response){
    $scope.list = response.data;
    $scope.search;
    console.log($scope.list);
  }, function(error){
    console.log(error);
  });
};
