'use strict';

describe('beer view2', function() {
  var view2Ctrl, scope;
  beforeEach(module('beer'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller, $rootScope) {
      //spec body
      scope= $rootScope.$new();
      view2Ctrl = $controller('View2Controller', {$scope: scope});
      expect(view2Ctrl).toBeDefined();
    }));

  });
});

