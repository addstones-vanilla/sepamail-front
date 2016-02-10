'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListeemetteursCtrl
 * @description
 * # ListeemetteursCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListeremiseCtrl', function ($routeParams,$scope, remiseFactory) {
    $scope.banque = $routeParams.bank;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.remises = remiseFactory.ListException;
  });
