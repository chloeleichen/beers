'use strict';
 module.exports = function($http) {
  var URL = {
    FETCH: './../data.json'
  };
  this.getPubs = function(){
    return $http.get(URL.FETCH);
  };
};
