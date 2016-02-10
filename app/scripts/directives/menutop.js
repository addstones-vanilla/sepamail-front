'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:menuTop
 * @description
 * # menuTop
 */
angular.module('sepamailFrontApp')
  .directive('menuTop', function ($routeParams,$location, menuTopFactory,bankClass) {
    return {
      restrict: 'E',
      link: function postLink($scope, element) {

        var urlPath = $location.path();

        var bankName = urlPath.split("/");

        var bank = bankClass.setBank(bankName[1]);

        var panelclass = bank.panelClass;

        console.log(panelclass);

        var bank =
          element.append(menuTopFactory.getMenu(bankName[2], bankName[1], panelclass));



        $scope.$on('$viewContentLoaded', function () {

          element.html('');

          var urlPath = $location.path();

          var bankName = urlPath.split("/");

          var bank = bankClass.setBank(bankName[1]);

          var panelclass = bank.panelClass;

          console.log(panelclass);

          var bank =
            element.append(menuTopFactory.getMenu(bankName[2], bankName[1], panelclass));
        })


        }
      };
  });
