'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:MandatEmetteurCtrl
 * @description
 * # MandatEmetteurCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('MandatEmetteurCtrl', function ($routeParams, emetteursFactory, $scope) {
    var mandatId = $routeParams.nbMandat;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mandat = emetteursFactory;

    $scope.emetteurs = emetteursFactory.ListRemitter;

    $scope.banque = $routeParams.banque_name;
  });
