'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:EmetteurViewCtrl
 * @description
 * # EmetteurViewCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('EmetteurViewCtrl', function (emetteursFactory, $scope, remiseFactory, $routeParams) {
    $scope.banque = $routeParams.banque_name;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.emetteur = emetteursFactory.ListRemitter[0];
    $scope.mandat = emetteursFactory;
    $scope.remise = remiseFactory.ListException[0];

  });
