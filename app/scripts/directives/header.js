'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:header
 * @description
 * # header
 */
angular.module('sepamailFrontApp')
  .directive('header', function ($routeParams, headerFactory, $location) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {

        var urlPath = $location.path();

        var bankName = urlPath.split("/");

        var bank =
        element.append(headerFactory.getBank(bankName[1]));


      }
    };
  });
