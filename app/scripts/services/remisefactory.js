'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.remiseFactory
 * @description
 * # remiseFactory
 * Factory in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('remiseFactory', function () {
    return{
      ListException :
        [
          {
            "Reference" : "REMISEGFI-00001",
            "CreatedDate" : "07/02/2017",
            "Remitter" : "EDF",
            "BIC" : "CMBRFR2BXXX",
            "NbOfMandate" : "10",
            "Status" : "transmis"
          },
          {
            "Reference" : "REMISEGFI-00002",
            "CreatedDate" : "08/02/2017",
            "Remitter" : "EDF",
            "BIC" : "CMBRFR2BXXX",
            "NbOfMandate" : "15",
            "Status" : "transmis"
          }
        ]
    }
  });
