(function (){
  'use strict';
  
  angular
    .module('app',['ngRoute','ngMessages'])
    .run(func);
  
  function func(){
    console.log('this is run function ');
  }
  
})();


