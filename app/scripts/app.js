(function () {
  'use strict';
  require('angular');
  require('angular-route');
  var view1ctrl = require('./../view1/view1Controller'),
      view2ctrl = require('./../view2/view2Controller');


  angular.module('beer', ['ngRoute'])
  .config([
    '$locationProvider',
    '$routeProvider',
    function($locationProvider, $routeProvider) {
      //$locationProvider.hashPrefix('!');
      // routes
      $routeProvider
        .when("/view1", {
          templateUrl: "./app/view1/view1.html",
          controller: "View1Controller"
        })
        .when("/view2",{
          templateUrl: "./app/view2/view2.html",
          controller: "View2Controller"
        })
        .otherwise({
           redirectTo: '/view1'
        });
    }
  ])

  //Load controller
  .controller('View1Controller', ['$scope', '$http', view1ctrl])
  .controller('View2Controller', ['$scope', view2ctrl]);
}());
