'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:RecapmandatCtrl
 * @description
 * # RecapmandatCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('RecapmandatCtrl', function ($routeParams, mandatsFactory, $scope) {
    var mandatId = $routeParams.nbMandat;
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    var arret = false;
    var index = 0;
    while(!arret){
      if(arret = mandatId === mandatsFactory[index].MandateNumber){
        $scope.mandat = mandatsFactory[index];
      }

      index++;
    }
    $scope.banque = $routeParams.banque_name;
  });
