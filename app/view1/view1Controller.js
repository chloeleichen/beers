'use strict';
 module.exports = function($scope, $http, $q, PubsModel) {
  $scope.distance = "distance from me";

  PubsModel.getPubs()
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
    console.log(geocode(2000)[$$state]);
  }

  function geocode(postcode){
    var result,
        targetUrl = "https://maps.googleapis.com/maps/api/geocode/json?address="+postcode+",+AU&key="+chloeBeerApp.apiKey,
        defer = $q.defer();

    $http.get(targetUrl)
        .then(function(response){
              console.log(response.data.results[0]);
              result = response.data.results[0].geometry.location;
              defer.resolve(result);
            }, function(error){
              console.log("error!");
            });
      return defer.promise;
    }
    //for testing 
    this.geocode = geocode;

};
