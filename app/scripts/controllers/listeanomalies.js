'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListeanomaliesCtrl
 * @description
 * # ListeanomaliesCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListeanomaliesCtrl', function ($scope,$routeParams) {
    $scope.banque = $routeParams.banque_name;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
