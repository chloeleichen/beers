'use strict';
describe('pubsModel service', function() {
  var $httpBackend,
      PubsModel;

  beforeEach(module('beer'));

  beforeEach(inject(function(_PubsModel_, _$httpBackend_){
    PubsModel = _PubsModel_;
    $httpBackend = _$httpBackend_;
    $httpBackend.when("GET", "./../data.json")
        .respond(200, {name:"goodValue"});
  }))


  afterEach(function () {
    $httpBackend.flush()
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('pubsModel successful http request', function () {
    it('.value should be "goodValue"', function () {
      PubsModel.getPubs()
        .then(function(response){
          expect(response.name).toEqual("goodValue");
        }, function(error){
          console.log(error);
        });
    });
  });
});
