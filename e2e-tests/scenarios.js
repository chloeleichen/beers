'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/view1");
  });
  
  describe('display view1', function() {
    var view1 = element(by.css('view1')),
        view2 = element(by.css('view2')),
        navView1 = element(by.linkText('Breweries Lookup')),
        navView2 = element(by.linkText('Beers Lookup'));

    beforeEach(function() {
      browser.get('index.html#/view1');
    });
    it('should render view1 when user navigates to /view1', function() {
      expect(view1.isPresent).toBeTruthy();
    });

    beforeEach(function(){
      navView2.click();
    });
    it('should flip to view2', function(){
      expect(view2.isPresent).toBeTruthy();
    });

    beforeEach(function(){
      browser.get('index.html#/view2');
    });
    it('should go to view2', function(){
      expect(view2.isPresent).toBeTruthy();
    });

    beforeEach(function(){
      navView1.click();
    });
    it('should flip to view2', function(){
      expect(view1.isPresent).toBeTruthy();
    });

  });

  describe('load all results initially', function(){
    var filteredResult = null ;

    beforeEach(function(){
      browser.get('index.html');
      filteredResult = element.all(by.repeater('pub in pubs'));
    });
    it('should initially display all pubs', function(){
      expect(filteredResult.count()).toBe(27);
    });
  });

  describe('keyword filter to work', function(){
    var filterInput = element(by.css('#filter'));
    var filteredResult = null;
    
    beforeEach(function(){
      browser.get('index.html');
      filteredResult = element.all(by.repeater('pub in pubs'));
      filterInput.sendKeys('any value');
    });
    it('should display 0 result', function(){
      expect(filteredResult.count()).toBe(0);
    });
  })

});
