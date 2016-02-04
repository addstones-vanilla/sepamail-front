'use strict';

/**
 * @ngdoc directive
 * @name sepamailFrontApp.directive:header
 * @description
 * # header
 */
angular.module('sepamailFrontApp')
  .directive('header', function ($routeParams, headerFactory, $location, $rootScope) {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {


        $rootScope.$on('$viewContentLoaded', function() {

          element.html('');


          var urlPath = $location.path();

          var bankName = urlPath.split("/");

            element.append(headerFactory.getBank(bankName[1]));
        })
      }
    };
  });
