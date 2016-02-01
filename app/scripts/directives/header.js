'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:header
 * @description
 * # header
 */
angular.module('sepamailFrontApp')
  .directive('header', function (headerFactory) {
    return {
      scope:{
        name:'@',
        color1:'@',
        color2:'@'
      },
      restrict: 'E',
      link: function postLink(scope, element) {



        element.append(headerFactory.getBank("test"));


      }
    };
  });
