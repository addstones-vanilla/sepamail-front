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
          case "socgen":
            stringHeader="<h1 style='color:white; background-color:black'>Société Générale</h1>";
            this.colorMenu = "#F78181";
            break;
          case "lcl":
            stringHeader="<h1 style='color:white; background-color:#0000FF'>LCL</h1>";
            this.colorMenu = "#81DAF5";
            break;
          default:
            console.log(id);
            //document.location.href = "/404.html";
        }

        return stringHeader;
      }
    };
  });
