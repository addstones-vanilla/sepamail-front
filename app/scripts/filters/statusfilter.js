'use strict';

/**
 * @ngdoc filter
 * @name sepamailFrontApp.filter:statusFilter
 * @function
 * @description
 * # statusFilter
 * Filter in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .filter('statusFilter', function () {
    return function (input) {
      switch(input){
        case 0:
              return "<span class='glyphicon glyphicon-ok'></span>";
              break;
        case 1:
          return "<span class='glyphicon glyphicon-remove'></span>";
              break;
        case 2:
          return "<span class='glyphicon glyphicon-time'></span>";
              break;
      }
    };
  });
