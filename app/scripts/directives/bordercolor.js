'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:borderColor
 * @description
 * # borderColor
 */
angular.module('sepamailFrontApp')
  .directive('borderColor', function (headerFactory) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        element.css('border-color',headerFactory.colorMenu);
      }
    };
  });
