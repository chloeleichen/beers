'use strict';
 module.exports = function($scope, $http) {
  $scope.beerStyles = [
    "Belgian Styles",
    "Bocks",
    "Brown Ales",
    "Dark Lagers",
    "Hybrid Beers",
    "India Pale Ales",
    "Pale Ales",
    "Pale Lagers",
    "Porters",
    "Scottish-Style Ales",
    "Specialty Beers",
    "Stouts",
    "Strong Ales",
    "Wheat Beers"
  ];
  $http.get('./../data.json')
  .then(function(response){
    $scope.pubs = response.data;
    $scope.search;
    console.log($scope.pubs);
  }, function(error){
    console.log(error);
  });
};
