'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:formularDirective
 * @description
 * # formularDirective
 */
angular.module('sepamailFrontApp')
  .directive('headingColor', function (headerFactory, $rootScope) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {

        element.css('background-color', headerFactory.colorMenu);
        element.css('border-color', headerFactory.colorMenu);

        $rootScope.$on('$viewContentLoaded', function() {

          element.css('background-color', headerFactory.colorMenu);
          element.css('border-color', headerFactory.colorMenu);
        })
      }
    };
  });
