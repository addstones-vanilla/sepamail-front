'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:colorPannel
 * @description
 * # colorPannel
 */
angular.module('sepamailFrontApp')
  .directive('colorPannel', function (headerFactory,$rootScope) {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        var heading = element.children().first();

        heading.css('background-color', headerFactory.colorMenu);
        heading.css('border-color', headerFactory.colorMenu);
        element.css('border-color', headerFactory.colorMenu);

        $rootScope.$on('$viewContentLoaded', function() {

          heading.css('background-color', headerFactory.colorMenu);
          heading.css('border-color', headerFactory.colorMenu);
          element.css('border-color', headerFactory.colorMenu);
        })
      }
    };
  });
