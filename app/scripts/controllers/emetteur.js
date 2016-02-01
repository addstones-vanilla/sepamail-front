'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:EmetteurCtrl
 * @description
 * # EmetteurCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('EmetteurCtrl', function (emetteursFactory, $scope) {
    $scope.MandateNumber = emetteursFactory.MandateNumber;
    $scope.SignedDate = emetteursFactory.SignedDate;
    $scope.Status = emetteursFactory.Status;
    $scope.IBAN = emetteursFactory.IBAN;
    $scope.AccountTitle = emetteursFactory.AccountTitle;
    $scope.ListRemitter = emetteursFactory.ListRemitter;

  });
