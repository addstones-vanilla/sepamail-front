'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:DepartCtrl
 * @description
 * # DepartCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('DepartCtrl', function (operationsFactory, $scope) {

    $scope.MandateNumber = operationsFactory.MandateNumber;
    $scope.SignedDate = operationsFactory.SignedDate;
    $scope.Status = operationsFactory.Status;
    $scope.IBAN = operationsFactory.IBAN;
    $scope.AccountTitle = operationsFactory.AccountTitle;
    $scope.ListeEmetteur = operationsFactory.ListeEmetteur;
  });
