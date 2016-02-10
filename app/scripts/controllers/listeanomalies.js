'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListeanomaliesCtrl
 * @description
 * # ListeanomaliesCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListeanomaliesCtrl', function ($scope,$routeParams, anomalieFactory) {
    $scope.banque = $routeParams.bank;
    $scope.etat = $routeParams.etat;

    switch($scope.etat){
      case "arrive":
            $scope.filEtat = "Banque d'arrivé";
            break;
      case "depart":
            $scope.filEtat = "Banque de départ";
            break;
      case "emetteur":
            $scope.filEtat = "Banque d'emetteur"
            break;
      default:
            $scope.filEtat = "erreur";
    }

    $scope.anomalies = anomalieFactory.ListException;
  });
