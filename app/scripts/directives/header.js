'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:header
 * @description
 * # header
 */
angular.module('sepamailFrontApp')
  .directive('header', function ($location, bankClass) {
    return {
      templateUrl: 'views/templates/mybank.html',
      restrict: 'E',
      link: function postLink($scope, element, attrs) {

        var urlPath = $location.path();

        var bankId = urlPath.split("/")[1];

        var bank = bankClass.setBank(bankId);

        $scope.$on('$viewContentLoaded', function() {

          var urlPath = $location.path();

          var bankId = urlPath.split("/")[1];

          var bank = bankClass.setBank(bankId);
          $scope.myclass = bank.cssClass;
          $scope.imgclass = bank.imgClass;
          console.log('dans ma directive : ', bank.cssClass);
        })

      }
    };
  });
//.directive('header', function ($routeParams, headerFactory, $location, $rootScope) {
//  return {
//    restrict: 'E',
//    link: function postLink(scope, element) {
//
//
//      $rootScope.$on('$viewContentLoaded', function() {
//
//        element.html('');
//
//
//        var urlPath = $location.path();
//
//        var bankName = urlPath.split("/");
//
//          element.append(headerFactory.getBank(bankName[1]));
//      })
//    }
//  };
//});
