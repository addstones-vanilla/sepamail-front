'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:borderColor
 * @description
 * # borderColor
 */
angular.module('sepamailFrontApp')
  .directive('borderColor', function (headerFactory, $rootScope) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        $rootScope.$on('$viewContentLoaded', function() {
          element.css('border-color', headerFactory.colorMenu);
        })
      }
    };
  });
