'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.headerFactory
 * @description
 * # headerFactory
 * Service in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('headerFactory', function () {
    // Public API here
    return {
      getBank: function (id) {

        var stringHeader;

        switch(id){
          case "test":
            stringHeader="<h1 style='color:blue; background-color:red'>testFactory</h1>";
            break;
          default:
            stringHeader="<h1>ya une erreur</h1>";
        }

        return stringHeader;
      }
    };
  });
