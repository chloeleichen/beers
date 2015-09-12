'use strict';
 module.exports = function($scope, $http, $q, PubsModel) {
  $scope.distance = "distance from me";


  var defer = $q.defer();
  defer.promise.then(function(){
    console.log('promose');
    
  });

  PubsModel.getPubs()
    .then(function(response){
      console.log(response.data);
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
              // defer.resolve();
            }, function(error){
              console.log("error!");
            });
    }

    //for testing 
    this.geocode = geocode;
};
