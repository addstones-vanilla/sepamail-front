'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:myHeader
 * @description
 * # myHeader
 */
angular.module('sepamailFrontApp')
  .directive('myHeader', function () {
    return {
      scope: {
        bank:'='
      },
      templateUrl: 'views/templates/mybank.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.myclass = scope.bank.cssClass;
        console.log('dans ma directive : ', scope.bank.cssClass);
      }
    };
  });
