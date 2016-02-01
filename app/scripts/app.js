'use strict';

/**
 * @ngdoc overview
 * @name sepamailFrontApp
 * @description
 * # sepamailFrontApp
 *
 * Main module of the application.
 */
angular
  .module('sepamailFrontApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/depart', {
        templateUrl: 'views/depart.html',
        controller: 'DepartCtrl',
        controllerAs: 'depart'
      })
      .when('/arrive', {
        templateUrl: 'views/arrive.html',
        controller: 'ArriveCtrl',
        controllerAs: 'arrive'
      })
      .when('/emetteur', {
        templateUrl: 'views/emetteur.html',
        controller: 'EmetteurCtrl',
        controllerAs: 'emetteur'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
