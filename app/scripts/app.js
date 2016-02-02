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
        templateUrl: 'views/start.html',
        controller: 'StartCtrl',
        controllerAs: 'start'
      })
      .when('/error', {
        templateUrl: '404.html',
        controller: 'ErrorCtrl',
        controllerAs: 'error'
      })
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
      .when('/:banque_name/recapMandat', {
        templateUrl: 'views/recapmandat.html',
        controller: 'RecapmandatCtrl',
        controllerAs: 'recapMandat'
      })
      .when('/:banque_name/recapOperation', {
        templateUrl: 'views/recapoperation.html',
        controller: 'RecapoperationCtrl',
        controllerAs: 'recapOperation'
      })
      .when('/:banque_name/recapEmetteur', {
        templateUrl: 'views/recapemetteur.html',
        controller: 'RecapemetteurCtrl',
        controllerAs: 'recapEmetteur'
      })
      .when('/:banque_name/listeMandats', {
        templateUrl: 'views/listemandats.html',
        controller: 'ListemandatsCtrl',
        controllerAs: 'listeMandats'
      })
      .when('/:banque_name/listeAnomalies', {
        templateUrl: 'views/listeanomalies.html',
        controller: 'ListeanomaliesCtrl',
        controllerAs: 'listeAnomalies'
      })
      .when('/:banque_name/listeOperations', {
        templateUrl: 'views/listeoperations.html',
        controller: 'ListeoperationsCtrl',
        controllerAs: 'listeOperations'
      })
      .when('/:banque_name/listeEmetteurs', {
        templateUrl: 'views/listeemetteurs.html',
        controller: 'ListeemetteursCtrl',
        controllerAs: 'listeEmetteurs'
      })
      .otherwise({
        redirectTo: '/error'
      });
  });
