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
      .when('/:banque_name/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:banque_name/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:banque_name/arrive', {
        templateUrl: 'views/arrive.html',
        controller: 'ArriveCtrl',
        controllerAs: 'arrive'
      })
      .when('/:banque_name/depart', {
        templateUrl: 'views/depart.html',
        controller: 'DepartCtrl',
        controllerAs: 'depart'
      })
      .when('/:banque_name/emetteur', {
        templateUrl: 'views/emetteur.html',
        controller: 'EmetteurCtrl',
        controllerAs: 'emetteur'
      })
      .when('/', {
        templateUrl: '404.html',
        controller: 'EmetteurCtrl',
        controllerAs: 'emetteur'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
