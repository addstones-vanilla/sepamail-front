'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.operationFactory
 * @description
 * # operationFactory
 * Service in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('operationsFactory', function () {
    return {
      "MandateNumber" : "MDT-GFIIFRPPXXX-0001",
      "SignedDate" : "07/02/2017",
      "Status" : "Transmis",
      "IBAN" :  "FR76 1451 8000 0112 3456 7890 154" ,
      "AccountTitle" : "Monsieur et Madame BANKS",
      "ListeEmetteur" :

        [
          {
            "NbDirectDebit" : 6,
            "ListDirectDebit":
              [
                {
                  "Creditor" : "EDF",
                  "ICS" : "12345",
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
                    ]
                },
                {
                  "Creditor" : "Orange",
                  "ICS" : "54321",
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
                }
              ]

          },
          {
            "NbReceivedCreditTransfer" : 5,
            "ListReceivedCreditTransfer":
              [
                {
                  "Debtor" : "GFI",
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
                },
                {
                  "Debtor" : "EDF",
                  "BIC" : "BNPAFRPPXXX",
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
                }
              ]
          },
          {
            "NbSentCreditTransfer" : 3,
            "ListSentCreditTransfer":
              [
                {
                  "Creditor" : "Mr BANKS",
                  "BIC" : "AGRIFRPPXXX",
                  "IBAN" : "FR76 1820 6002 1054 8726 6700 217",
                  "ListSentCreditTransferRemitter" :
                    [
                      {
                        "Type" : "SEPA",
                        "Reference" : "Echeance pret immo decembre",
                        "Status" : "OK"
                      },
                      {
                        "Type" : "SEPA",
                        "Reference" : "Echeance pret immo janvier",
                        "Status" : "OK"
                      },
                      {
                        "Type" : "SEPA",
                        "Reference" : "Echeance pret immo novembre",
                        "Status" : "OK"
                      }
                    ]
                }
              ]
          },
          {
            "Nbcheck" : 3,
            "ListCheck":
              [
                {
                  "checkNumber" : 1234567
                },
                {
                  "checkNumber" : 89876543
                },
                {
                  "checkNumber" : 5678912
                }
              ]
          }
        ]};

  });
