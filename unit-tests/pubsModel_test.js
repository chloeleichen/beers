'use strict';
describe('pubsModel service', function() {
  var $httpBackend;

  beforeEach(module('beer'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get("$httpBackend");
    $httpBackend.when("GET", "./../data.json")
        .respond(200, {name:"goodValue"});
  }));

  afterEach(function () {
    $httpBackend.flush()
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('pubsModel successful http request', function () {
    it('.value should be "goodValue"', inject(function (pubsModel) {

        pubsModel.getPubs().success(function(response) {
          expect(response.name).toEqual("goodValue");
        }).error( function(response) {
          //should not error with $httpBackend interceptor 200 status
          expect(false).toEqual(true);
        });
    }));
  });
});
