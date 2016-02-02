'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.mandatsFactory
 * @description
 * # mandatsFactory
 * Service in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('mandatsFactory', function () {
    return [
      {
        "MandateNumber" : "MDT-GFIIFRPPXXX-0001",
        "SignedDate" : "07/02/2017",
        "BIC" : "FTNOFRP1XXX",
        "IBAN" :  "FR76 1451 8000 0112 3456 7890 154" ,
        "AccountTitle" : "Monsieur et Madame BANKS",
        "Status" : "Transmis",
        "NextStatus" : "Repondu",
        "Delay" : "1 jour",
        "OperationView" :
        {
          "NbDirectDebit" : 6,
          "NbReceivedCreditTransfer" : 5,
          "NbSentCreditTransfer" : 3,
          "Nbcheck" : 3
        },
        "RemitterView" :
        {
          "NbRemitter" : 4,
          "NbOfBank" : 3,
          "BankToNotice" : 1,
          "NbOfExceptions" : 0
        }
      },
      {
        "MandateNumber" : "MDT-GFIIFRPPXXX-0002",
        "SignedDate" : "07/02/2017",
        "BIC" : "CMBRFR2BARK",
        "IBAN" : "FR76 1820 6002 1054 8726 6700 217" ,
        "AccountTitle" : "Monsieur BANKS",
        "Status" : "Signé",
        "NextStatus" : "Transmis",
        "Delay" : "1 jour",
        "OperationView" :
        {
          "NbDirectDebit" : 2,
          "NbReceivedCreditTransfer" : 1,
          "NbSentCreditTransfer" : 0,
          "Nbcheck" : 3
        },
        "RemitterView" :
        {
          "NbRemitter" : 3,
          "NbOfBank" : 2,
          "BankToNotice" : 1,
          "NbOfExceptions" : 0
        }
      },
      {
        "MandateNumber" : "MDT-GFIIFRPPXXX-0003",
        "SignedDate" : "07/02/2017",
        "BIC" : "CMBRFR2BEFI",
        "IBAN" : "FR76 1820 6002 1054 8726 6700 217" ,
        "AccountTitle" : "Monsieur BANKS",
        "Status" : "Signé",
        "NextStatus" : "Transmis",
        "Delay" : "1 jour",
        "OperationView" :
        {
          "NbDirectDebit" : 2,
          "NbReceivedCreditTransfer" : 1,
          "NbSentCreditTransfer" : 0,
          "Nbcheck" : 3
        },
        "RemitterView" :
        {
          "NbRemitter" : 3,
          "NbOfBank" : 2,
          "BankToNotice" : 1,
          "NbOfExceptions" : 0
        }
      }
    ];
  });
