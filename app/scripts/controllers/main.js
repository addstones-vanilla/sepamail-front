'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('MainCtrl', function ($routeParams,$scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.banque_name = $routeParams.banque_name;
  });
