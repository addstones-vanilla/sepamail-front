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
          case "toto":
            stringHeader="<h1 style='color:blue; background-color:red'>banque Toto</h1>";
            break;
          case "tata":
            stringHeader="<h1 style='color:green; background-color:yellow'>banque Tata</h1>";
            break;
          default:
            document.location.href = "/404.html";
        }

        return stringHeader;
      }
    };
  });
