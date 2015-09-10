'use strict';

describe('beer view2', function() {
  var $controller;
  var deferred;

  beforeEach(module('beer'));

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope', function() {
    var $scope, controller;

    beforeEach(function(){
      $scope = {};
      controller = $controller('View2Controller', {$scope: $scope});
    });
    //controller defined
    it('view2 controller defined', function(){
      expect(controller).toBeDefined();
    });

    it('load 14 beer styles family', function(){
      expect($scope.families).toBeDefined();
      expect($scope.families[0]).toEqual("Belgian Styles");
      expect($scope.families.length).toBe(14);
    });

  });
});
