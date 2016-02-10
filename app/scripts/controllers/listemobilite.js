'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListemobiliteCtrl
 * @description
 * # ListemobiliteCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListemobiliteCtrl', function ($scope, mandatsFactory,$routeParams) {
    $scope.banque = $routeParams.bank;

    $scope.mandats = mandatsFactory;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
