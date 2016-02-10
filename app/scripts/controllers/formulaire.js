'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:FormulaireCtrl
 * @description
 * # FormulaireCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('FormulaireCtrl', function ($scope,$routeParams) {
    $scope.banque = $routeParams.bank;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

        $('#datetimepicker1').datetimepicker();
        $('#datetimepicker2').datetimepicker();
  });
