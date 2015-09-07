'use strict';

describe('beer view1', function() {
  beforeEach(module('beer'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

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
    //list defined
    it('a list exists', function() {
      expect($scope.list).toBeDefined();
    });

    it('first item should be 0', function() {
      expect($scope.list[0]).toEqual(0);
    });

  });
});
