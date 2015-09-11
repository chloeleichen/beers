'use strict';
 module.exports = function($scope, $http) {
  $scope.distance = "distance from me";
  $http.get('./../data.json')
  .then(function(response){
    init(response);
  }, function(error){
    console.log(error);
  });

  function getDistance(postcode){
    $scope.distance = postcode;
  }

  function init(response){
    $scope.pubs = response.data;
    $scope.search;
    $scope.getDistance = getDistance;
    console.log($scope.pubs);

  }
};
