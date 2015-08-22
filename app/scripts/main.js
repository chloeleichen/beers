(function () {
  'use strict';
  var angular = require('angular');
  //create module
  var beer = angular.module('beer', []);

  beer.controller('MainController', function(){
    this.message = "hello";
  });

})();
