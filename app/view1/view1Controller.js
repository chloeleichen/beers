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
    console.log(geocode(2000));
  }

  function geocode(postcode){
    var result;
    var targetUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+postcode+",+AU&key="+chloeBeerApp.apiKey;
    $http.get(targetUrl)
    .then(function(response){
          console.log(response.data.results[0]);
          result = response.data.results[0].geometry.location;
        }, function(error){
          console.log("error!");
        });
    }

    //for testing 
    this.geocode = geocode;
};
