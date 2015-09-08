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
        navView1 = element(by.linkText('view1')),
        navView2 = element(by.linkText('view2'));

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
});
