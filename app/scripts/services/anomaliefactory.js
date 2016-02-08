'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.anomalieFactory
 * @description
 * # anomalieFactory
 * Factory in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('anomalieFactory', function () {
    return {
      ListException :
        [
          {
            "MandateNumber" : "MDT-GFIIFRPPXXX-0001",
            "SignedDate" : "07/02/2017",
            "BIC" : "CEPAFRPPXXX",
            "IBAN" : "FR76 1451 8000 0112 3456 7890 154",
            "AccountTitle" : "Monsieur et Madame BANKS",
            "ExceptionDate": "09/02/2017",
            "InformationDetail" : "Client non habilité",
            "StatusCode" : "ERR-001",
            "Partner" : "DEPART"
          },
          {
            "MandateNumber" : "MDT-GFIIFRPPXXX-0005",
            "SignedDate" : "08/02/2017",
            "BIC" : "BNPAFRPPXXX",
            "AccountTitle" : "EDF",
            "ExceptionDate": "10/02/2017",
            "InformationDetail" : "Délai dépassé",
            "StatusCode" : "ERR-003",
            "Partner" : "EMETTEUR"
          }
        ]
    };
  });
