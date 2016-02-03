'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:RecapmandatCtrl
 * @description
 * # RecapmandatCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('RecapmandatCtrl', function ($routeParams, mandatsFactory, $scope) {
    var mandatId = $routeParams.nbMandat;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mandat = mandatsFactory[mandatId];
    $scope.banque = $routeParams.banque_name;
  });
