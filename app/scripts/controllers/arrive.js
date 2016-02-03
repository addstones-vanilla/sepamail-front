'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:ArriveCtrl
 * @description
 * # ArriveCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('ArriveCtrl', function (mandatsFactory,$scope) {


    var mandats = mandatsFactory;

    var newData = [];


    for(var index in mandats){
      var frenchDate = mandats[index].SignedDate;

      var ukDate = frenchDate.substring(6, 10) + "-" +  frenchDate.substring(3, 5);

      var exist = false;

      for(var index2 in newData){
        if(newData[index2].date === ukDate){
          newData[index2].trendingValue ++;

          exist = true;
        }
      }

      if(!exist){
        newData.push(
          { 'date' : ukDate,
            'trendingValue' : 1
          }
        )
      }
    }

    $scope.data = newData;

  });
