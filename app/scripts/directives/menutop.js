'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:menuTop
 * @description
 * # menuTop
 */
angular.module('sepamailFrontApp')
  .directive('menuTop', function ($routeParams, menuTopFactory, $location, $rootScope) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {

        $rootScope.$on('$viewContentLoaded', function () {

          element.html('');

          var urlPath = $location.path();

          var bankName = urlPath.split("/");

          var bank =
            element.append(menuTopFactory.getMenu(bankName[2], bankName[1]));
        })


        }
      };
  });
