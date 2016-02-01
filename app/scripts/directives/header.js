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
      scope:false,
      restrict: 'E',
      link: function postLink(scope, element) {

        element.append(headerFactory.getBank(scope.banque_name));


      }
    };
  });
