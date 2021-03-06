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
      .when('/:bank/:test/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/:bank/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:bank/arrive/accueil', {
        templateUrl: 'views/arrive.html',
        controller: 'ArriveCtrl',
        controllerAs: 'arrive'
      })
      .when('/:bank/depart/accueil', {
        templateUrl: 'views/depart.html',
        controller: 'DepartCtrl',
        controllerAs: 'depart'
      })
      .when('/:bank/emetteur/accueil', {
        templateUrl: 'views/emetteur.html',
        controller: 'EmetteurCtrl',
        controllerAs: 'emetteur'
      })
      .when('/:bank/:etat/mandat-operation/:nbMandat', {
        templateUrl: 'views/mandat-operation.html',
        controller: 'RecapmandatCtrl',
        controllerAs: 'recapMandat'
      })
      .when('/:bank/:etat/mandat-emetteur/:nbMandat', {
        templateUrl: 'views/mandat-emetteur.html',
        controller: 'MandatEmetteurCtrl',
        controllerAs: 'mandatEmetteur'
      })
      .when('/:bank/recapOperation', {
        templateUrl: 'views/recapoperation.html',
        controller: 'RecapoperationCtrl',
        controllerAs: 'recapOperation'
      })
      .when('/:bank/:etat/listeMandats/:statut', {
        templateUrl: 'views/listemandats.html',
        controller: 'ListemandatsCtrl',
        controllerAs: 'listeMandats'
      })
      .when('/:bank/:etat/listeMobilite', {
        templateUrl: 'views/listemobilite.html',
        controller: 'ListemobiliteCtrl',
        controllerAs: 'listeMobilite'
      })
      .when('/:bank/:etat/listeAnomalies', {
        templateUrl: 'views/listeanomalies.html',
        controller: 'ListeanomaliesCtrl',
        controllerAs: 'listeAnomalies'
      })
      .when('/:bank/:etat/listedomiciliation', {
        templateUrl: 'views/listedomiciliation.html',
        controller: 'ListedomiciliationCtrl',
        controllerAs: 'listeDomiciliation'
      })
      .when('/:bank/:etat/suiviRemises', {
        templateUrl: 'views/listeremises.html',
        controller: 'ListeremiseCtrl',
        controllerAs: 'listeRemises'
      })
      .when('/:bank/arrive/formulaire', {
        templateUrl: 'views/formulaire.html',
        controller: 'FormulaireCtrl',
        controllerAs: 'formulaire'
      })
      .when('/:bank/emetteur/emetteur-view', {
        templateUrl: 'views/emetteur-view.html',
        controller: 'EmetteurViewCtrl',
        controllerAs: 'emetteurView'
      })
      //.when('/test/:bank', {
      //  templateUrl: 'views/test.html',
      //  controller: 'BankCtrl',
      //  controllerAs: 'test'
      //})
      .otherwise({
        redirectTo: '/error'
      });
  });
