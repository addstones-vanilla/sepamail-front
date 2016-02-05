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

    $scope.optionsDonut = {
      chart: {
        type: 'pieChart',
        donut: true,
        x: function (d) {
          return d.key;
        },
        y: function (d) {
          return d.y;
        },
        showLabels: true,
        duration: 500,
        labelType: "value",
        legend: {
          vers: 'furious'
        }
      }
    };

    $scope.dataDonut = [
      {
        key: "AGRIFRPPXXX",
        y: 65,
        color: "#660000"
      },
      {
        key: "SOGEFRPPXXX",
        y: 59,
        color: '#CC0000'
      },
      {
        key: "CEPAFRPPXXX",
        y: 40
      },
      {
        key: "BNPAFRPPXXX",
        y: 19
      }
    ];

    var dates = ['Jan 2017', 'Feb 2017', 'Mars 2017', 'Avril 2017', 'Mai 2017'];

    $scope.optionsBars = {
      chart: {
        type: 'multiBarChart',
        legend: {
          vers: 'furious'
        },
        clipEdge: true,
        staggerLabels: true,
        duration: 500,
        stacked: true,
        xAxis: {
          axisLabelDistance: -20,
          //axisLabel: 'Date',
          //tickValues: [0, 1, 2, 3, 4, 5, 6],
          tickFormat: function (d) {
            return dates[d];
          }
        },
        yAxis: {
          //axisLabel: 'Clients',
          axisLabelDistance: -20,
          tickFormat: function (d) {
            return d3.format(',.f')(d);
          }
        }
      }
    }
    ;

    $scope.dataBars = [{
      "key": "AGRIFRPPXXX",
      "values": [{
        "x": 0,
        "y": 67
      }, {
        "x": 1,
        "y": 59
      }, {
        "x": 2,
        "y": 80
      }, {
        "x": 3,
        "y": 81
      }, {
        "x": 4,
        "y": 56
      }]
    }, {
      "key": "SOGEFRPPXXX",
      "values": [{
        "x": 0,
        "y": 67
      }, {
        "x": 1,
        "y": 59
      }, {
        "x": 2,
        "y": 80
      }, {
        "x": 3,
        "y": 81
      }, {
        "x": 4,
        "y": 56
      }]
    }, {
      "key": "CEPAFRPPXXX",
      "values": [{
        "x": 0,
        "y": 67
      }, {
        "x": 1,
        "y": 59
      }, {
        "x": 2,
        "y": 80
      }, {
        "x": 3,
        "y": 81
      }, {
        "x": 4,
        "y": 56
      }]
    }, {
      "key": "CEPAFRPPXXX",
      "values": [{
        "x": 0,
        "y": 67
      }, {
        "x": 1,
        "y": 59
      }, {
        "x": 2,
        "y": 80
      }, {
        "x": 3,
        "y": 81
      }, {
        "x": 4,
        "y": 56
      }]
    }];

    $scope.options = {
      chart: {
        type: 'lineChart',
        showLabels: false,
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 40,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        xAxis: {
          tickFormat: function (d) {
            return dates[d];
          }
        },
        yAxis: {
          axisLabel: '',
          tickFormat: function(d){
            return d3.format('.f')(d);
          },
          axisLabelDistance: -10
        }
      }
    };

    $scope.data =  [{
      "key": "TOTAL",
      "values": [{
        "x": 0,
        "y": 67
      }, {
        "x": 1,
        "y": 59
      }, {
        "x": 2,
        "y": 80
      }, {
        "x": 3,
        "y": 81
      }, {
        "x": 4,
        "y": 56
      }]
    }];

  });
