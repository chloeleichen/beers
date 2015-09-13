'use strict';

describe('beer view1', function() {
  var $controller,
      $httpBackEnd = null,
      pubsModel = null;

  beforeEach(module('beer'));

  beforeEach(inject(function(_$httpBackend_, _$controller_, _pubsModel_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    $httpBackEnd = _$httpBackend_;
    pubsModel = _pubsModel_;
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

    it('should geocode correctly', function(){
      expect(controller.geocode).toBeDefined();
    });

    });
  });
});
