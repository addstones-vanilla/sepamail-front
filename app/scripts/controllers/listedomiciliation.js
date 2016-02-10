'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListeoperationsCtrl
 * @description
 * # ListeoperationsCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListedomiciliationCtrl', function ($scope,$routeParams, mandatsFactory) {
    $scope.banque = $routeParams.bank;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mandats = mandatsFactory;
  });
