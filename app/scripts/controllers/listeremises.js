'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListeemetteursCtrl
 * @description
 * # ListeemetteursCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListeremiseCtrl', function ($routeParams,$scope) {
    $scope.banque = $routeParams.banque_name;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
