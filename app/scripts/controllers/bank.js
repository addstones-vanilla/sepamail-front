'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:BankctlrCtrl
 * @description
 * # BankctlrCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
    .controller('BankCtrl', function ($scope, $routeParams, bankClass) {

      var bankId = $routeParams.bank;
      $scope.bank = bankClass.setBank(bankId);
    });
