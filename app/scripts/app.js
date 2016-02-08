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
    'ngTouch',
    'nvd3'
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
      .when('/:banque_name/:test/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:banque_name/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:banque_name/arrive/accueil', {
        templateUrl: 'views/arrive.html',
        controller: 'ArriveCtrl',
        controllerAs: 'arrive'
      })
      .when('/:banque_name/depart/accueil', {
        templateUrl: 'views/depart.html',
        controller: 'DepartCtrl',
        controllerAs: 'depart'
      })
      .when('/:banque_name/emetteur/accueil', {
        templateUrl: 'views/emetteur.html',
        controller: 'EmetteurCtrl',
        controllerAs: 'emetteur'
      })
      .when('/:banque_name/:etat/mandat-operation/:nbMandat', {
        templateUrl: 'views/mandat-operation.html',
        controller: 'RecapmandatCtrl',
        controllerAs: 'recapMandat'
      })
      .when('/:banque_name/:etat/mandat-emetteur/:nbMandat', {
        templateUrl: 'views/mandat-emetteur.html',
        controller: 'MandatEmetteurCtrl',
        controllerAs: 'mandatEmetteur'
      })
      .when('/:banque_name/recapOperation', {
        templateUrl: 'views/recapoperation.html',
        controller: 'RecapoperationCtrl',
        controllerAs: 'recapOperation'
      })
      .when('/:banque_name/:etat/listeMandats/:statut', {
        templateUrl: 'views/listemandats.html',
        controller: 'ListemandatsCtrl',
        controllerAs: 'listeMandats'
      })
      .when('/:banque_name/:etat/listeMobilite', {
        templateUrl: 'views/listemobilite.html',
        controller: 'ListemobiliteCtrl',
        controllerAs: 'listeMobilite'
      })
      .when('/:banque_name/:etat/listeAnomalies', {
        templateUrl: 'views/listeanomalies.html',
        controller: 'ListeanomaliesCtrl',
        controllerAs: 'listeAnomalies'
      })
      .when('/:banque_name/:etat/listedomiciliation', {
        templateUrl: 'views/listedomiciliation.html',
        controller: 'ListedomiciliationCtrl',
        controllerAs: 'listeDomiciliation'
      })
      .when('/:banque_name/:etat/suiviRemises', {
        templateUrl: 'views/listeremises.html',
        controller: 'ListeremiseCtrl',
        controllerAs: 'listeRemises'
      })
      .when('/:banque_name/arrive/formulaire', {
        templateUrl: 'views/formulaire.html',
        controller: 'FormulaireCtrl',
        controllerAs: 'formulaire'
      })
      .when('/:banque_name/emetteur/emetteur-view', {
        templateUrl: 'views/emetteur-view.html',
        controller: 'EmetteurViewCtrl',
        controllerAs: 'emetteurView'
      })
      .otherwise({
        redirectTo: '/error'
      });
  });
