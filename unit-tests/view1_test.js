'use strict';

describe('beer view1', function() {
  var $controller;
  var deferred;

  beforeEach(module('beer'));

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  beforeEach(function () {
    inject(function ($q) {
      deferred = $q.defer();
    });
  });

  describe('$scope', function() {
    var $scope, controller;

    beforeEach(function(){
      $scope = {};
      controller = $controller('View1Controller', {$scope: $scope});
    });
    //controller defined
    it('view1 controller defined', function(){
      expect(controller).toBeDefined();
    });

    it('load 14 beer styles family', function(){
      expect($scope.families).toBeDefined();
      expect($scope.families[0]).toEqual("Belgian Styles");
      expect($scope.families.length).toBe(14);
    });

  });
});
