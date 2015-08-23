  describe('MainController', function() {
  var mainCtrl, scope;
  beforeEach(module('beer'))
  beforeEach(inject(function($controller, $rootScope){
  //crucial: 
  scope= $rootScope.$new();
  mainCtrl = $controller('MainController', {$scope: scope});
  }));
  
  describe('MainController', function(){
    it("should have message of hello", function(){
      expect(mainCtrl.message).toBe("hello");
    });
    it("should have hola", function(){
      expect(mainCtrl.message).toBe("hello");
    });
    it('should have all brewries', function(){
      scope.name = "Frederik";
      scope.$digest();
      expect(scope.name).toBe("Frederik");
    })
  });
});

