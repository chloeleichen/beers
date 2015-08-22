describe('initial test', function() {
  var mainCtrl;
  beforeEach(module('beer'))
  beforeEach(inject(function($controller){
  mainCtrl = $controller('MainController');
  }));
  
  describe('MainController', function(){
    it("should have message of hello", function(){
      expect(mainCtrl.message).toBe("hello");
    })
  })
});
