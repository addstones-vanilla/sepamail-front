'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:TestCtrl
 * @description
 * # TestCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('TestCtrl', function ($scope, $routeParams, testBankFact) {

    var bankId = $routeParams.bank;
    $scope.bank = testBankFact.setBank(bankId);
  });
