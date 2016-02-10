'use strict';

/**
 * @ngdoc function
 * @name sepamailFrontApp.controller:RecapmandatCtrl
 * @description
 * # RecapmandatCtrl
 * Controller of the sepamailFrontApp
 */
angular.module('sepamailFrontApp')
  .controller('RecapmandatCtrl', function ($routeParams,operationsFactory, $scope) {
    $scope.etat = $routeParams.etat;

    if($scope.etat === "arrive"){
      $scope.filArianeName = "Mandats signés";
      $scope.filAriane = "listeMandats/signe";
    }
    else if($scope.etat === "emetteur"){
      $scope.filArianeName = "Changement domiciliations";
      $scope.filAriane ="listedomiciliation";
    }



    $scope.mandat = operationsFactory;

    $scope.prelevements = operationsFactory.ListeEmetteur[0].ListDirectDebit;
    $scope.prelevementNb = operationsFactory.ListeEmetteur[0].NbDirectDebit;



    var virementRecusList = operationsFactory.ListeEmetteur[1].ListReceivedCreditTransfer;
    $scope.virementRecuNb = operationsFactory.ListeEmetteur[1].NbReceivedCreditTransfer;

    $scope.virementRecus = [];

    for(var index in virementRecusList){
      for(var index2 in virementRecusList[index].ListReceivedCreditTransferRemitter){
        $scope.virementRecus.push({ 'Emetteur': virementRecusList[index].Debtor,
                                    'BIC':virementRecusList[index].BIC,
                                    'Reference': virementRecusList[index].ListReceivedCreditTransferRemitter[index2].Reference,
                                    'Status': virementRecusList[index].ListReceivedCreditTransferRemitter[index2].Status});
      }
    }

    $scope.virementEmisEmetteur = operationsFactory.ListeEmetteur[2].ListSentCreditTransfer[0];
    $scope.virementEmis = operationsFactory.ListeEmetteur[2].ListSentCreditTransfer[0].ListSentCreditTransferRemitter;
    $scope.virementEmiNb = operationsFactory.ListeEmetteur[2].NbSentCreditTransfer;

    $scope.checks = operationsFactory.ListeEmetteur[3].ListCheck;
    $scope.checkNb = operationsFactory.ListeEmetteur[3].Nbcheck;

    $scope.banque = $routeParams.bank;
  });
