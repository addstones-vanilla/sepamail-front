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
            stringHeader="<div class='page-header' style='color:white; background-color:black'>" +
              "<h1>Société Générale</h1>" +
          "</div>";
            this.colorMenu = "#F78181";
            break;
          case "lcl":
            stringHeader="<div class='page-header' style='color:white; background-color:#1C439F'>" +
              "<h1>LCL</h1>" +
              "</div>";
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
