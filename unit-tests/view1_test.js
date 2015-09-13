'use strict';

describe('beer view1', function() {
  var $controller;

  beforeEach(module('beer'));

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

    // it('should geocode correctly', function(){
    //   expect(controller.geocode).toBeDefined();
    // });

    });
  });

