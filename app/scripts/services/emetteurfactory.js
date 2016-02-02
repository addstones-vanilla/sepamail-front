'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.emetteurFactory
 * @description
 * # emetteurFactory
 * Service in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('emetteursFactory', function () {
    return {
      "MandateNumber" : "MDT-GFIIFRPPXXX-0001",
      "SignedDate" : "07/02/2017",
      "Status" : "Transmis",
      "IBAN" :  "FR76 1451 8000 0112 3456 7890 154" ,
      "AccountTitle" : "Monsieur et Madame BANKS",
      "ListRemitter" :
        [
          {
            "Remitter" : "EDF",
            "BIC" : "BNPAFRPPXXX",
            "ListDirectDebitRemitter" :
              [
                {
                  "RUM" : "RUM-MDT-EDF-BANKS",
                  "Type" : "SEPA",
                  "Reference" : "PREL Quittance Decembre",
                  "Status" : "OK"
                },
                {
                  "RUM" : "RUM-MDT-EDF-BANKS",
                  "Type" : "SEPA",
                  "Reference" : "PREL Quittance Novembre",
                  "Status" : "OK"
                },
                {
                  "RUM" : "RUM-MDT-EDF-BANKS",
                  "Type" : "SEPA",
                  "Reference" : "PREL Quittance Janvier",
                  "Status" : "OK"
                }
              ],
            "ListReceivedCreditTransferRemitter" :
              [
                {
                  "Reference" : "Remboursement janvier",
                  "Type" : "SEPA",
                  "Status" : "OK"
                },
                {
                  "Reference" : "Remboursement Decembre",
                  "Type" : "SEPA",
                  "Status" : "OK"
                }
              ]
          },
          {
            "Remitter" : "Orange",
            "BIC" : "SOGEFRPPXXX",
            "ListDirectDebitRemitter" :
              [
                {
                  "RUM" : "RUM-MDT-ORANGE-BANKS",
                  "Type" : "SEPA",
                  "Reference" : "PREL Abonnement Decembre",
                  "Status" : "OK"
                },
                {
                  "RUM" : "RUM-MDT-ORANGE-BANKS",
                  "Type" : "SEPA",
                  "Reference" : "PREL Abonnement Novembre",
                  "Status" : "OK"
                },
                {
                  "RUM" : "RUM-MDT-EDF-BANKS",
                  "Type" : "SEPA",
                  "Reference" : "PREL Abonnement Janvier",
                  "Status" : "OK"
                }
              ]
          },
          {
            "Remitter" : "GFI",
            "BIC" : "CEPAFRPPXXX",
            "ListReceivedCreditTransferRemitter" :
              [
                {
                  "Reference" : "VIRT - Salaire Decembre",
                  "Type" : "SEPA",
                  "Status" : "OK"
                },
                {
                  "Reference" : "VIRT - Salaire Janvier",
                  "Type" : "SEPA",
                  "Status" : "OK"
                },
                {
                  "Reference" : "VIRT - Salaire Novembre",
                  "Type" : "SEPA",
                  "Status" : "OK"
                }
              ]
          }
        ]};
  });
