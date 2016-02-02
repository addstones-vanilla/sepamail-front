'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ListemandatsCtrl
 * @description
 * # ListemandatsCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ListemandatsCtrl', function ($scope, mandatsFactory) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.mandats = mandatsFactory;
  });
