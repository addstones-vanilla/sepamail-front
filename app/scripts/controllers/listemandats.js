'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListemandatsCtrl
 * @description
 * # ListemandatsCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListemandatsCtrl', function ($scope, mandatsFactory, $routeParams) {
    var statutMandats = $routeParams.statut;
    $scope.banque = $routeParams.bank;

    switch(statutMandats){
      case "non-signe":
            $scope.filAriane ="Mandats non signés";
            break;
      case "signe":
            $scope.filAriane = "Mandats signés";
            break;
      case "historique":
            $scope.filAriane = "Mandats historisés";
            break;
      case "mobilite":
        $scope.filAriane = "Mandats de mobilité";
        break;
      default:
            $scope.filAriane = "erreur";
            break;
    }

    $scope.mandats = mandatsFactory;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
