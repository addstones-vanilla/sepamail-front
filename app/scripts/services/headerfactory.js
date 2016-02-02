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
      colorMenu: "white",
      getBank: function (id) {

        var stringHeader;

        switch(id){
          case "toto":
            stringHeader="<h1 style='color:white; background-color:red'>banque Toto</h1>";
            this.colorMenu = "cyan";
            break;
          case "tata":
            stringHeader="<h1 style='color:white; background-color:green'>banque Tata</h1>";
            this.colorMenu = "yellow";
            break;
          default:
            console.log(id);
            //document.location.href = "/404.html";
        }

        return stringHeader;
      }
    };
  });
