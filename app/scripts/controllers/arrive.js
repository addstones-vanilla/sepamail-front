'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ArriveCtrl
 * @description
 * # ArriveCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ArriveCtrl', function (mandatsFactory, $scope) {

    $scope.labels = ['Jan 2017', 'Feb 2017', 'Mars 2017', 'Avril 2017', 'Mai 2017', 'Juin 2017'];
    $scope.series = ['AGRIFRPPXXX', 'SOGEFRPPXXX', 'CEPAFRPPXXX', 'BNPAFRPPXXX'];

    $scope.data = [
      [65, 59, 80, 81, 56, 55],
      [28, 48, 40, 19, 86, 27],
      [28, 48, 40, 19, 86, 27],
      [28, 48, 40, 19, 86, 27]
    ];

    $scope.labels2 = ["AGRIFRPPXXX", "SOGEFRPPXXX", "CEPAFRPPXXX, BNPAFRPPXXX"];
    $scope.data2 = [25, 25, 25, 25];

    var colorArray = ['#000000', '#660000', '#CC0000', '#FF6666'];
    $scope.colorFunction = function () {
      return function (d, i) {
        return colorArray[i];
      };
    };

    $scope.xFunction = function () {
      return function (d) {
        return d.key;
      };
    }

    $scope.yFunction = function () {
      return function (d) {
        return d.y;
      };
    }

    $scope.toolTipContentFunction = function () {
      return function (key, x, y, e, graph) {
        return '<div>' + key  + '</div>';
      }
    }


    $scope.exampleData = [
      {key: "AGRIFRPPXXX", y: 65},
      {key: "SOGEFRPPXXX", y: 59},
      {key: "CEPAFRPPXXX", y: 40},
      {key: "BNPAFRPPXXX", y: 19}
    ];


    //var mandats = mandatsFactory;
    //
    //var newData = [];
    //
    //$scope.data = newData;

  });
