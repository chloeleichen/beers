'use strict';
 module.exports = function($http) {
  var URL = {
    FETCH: './../data.json'
  },
  pubs;

  function extract(result){
    return result.data();
  }

  function cachePubs(result){
    pubs = extract(result);
    return pubs;
  }
  
  this.getPubs = function(){
    return (pubs)? $q.when(pubs) ? $http.get(URL.FETCH).then(cachePubs);
  };
};
