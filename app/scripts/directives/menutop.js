'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:menuTop
 * @description
 * # menuTop
 */
angular.module('sepamailFrontApp')
  .directive('menuTop', function ($routeParams, menuTopFactory, $location) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {

        var urlPath = $location.path();

        var bankName = urlPath.split("/");

        var bank =
          element.append(menuTopFactory.getMenu(bankName[2], bankName[1]));


      }
    };
  });
