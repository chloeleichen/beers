'use strict';
 module.exports = function($scope, $http) {
  $http.get('./../data.json')
  .then(function(response){
    $scope.pubs = response.data;
    $scope.search;
    console.log($scope.pubs);
  }, function(error){
    console.log(error);
  });
};
