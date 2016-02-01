'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ArriveCtrl
 * @description
 * # ArriveCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ArriveCtrl', function (mandatsFactory, $scope) {

    $scope.mandats = mandatsFactory;
  });
