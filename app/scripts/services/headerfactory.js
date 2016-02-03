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
            stringHeader="<div style='color:white; background-color:#1D1D1B'>" +
              "<img src='/images/banques/societe-generale.jpg' height='100'>" +
          "</div>";
            this.colorMenu = "#E5022F";
            break;
          case "lcl":
            stringHeader="<div style='color:white; background-color:#21368B'>" +
              "<img src='/images/banques/lcl.png' height='100'>" +
              "</div>";
            this.colorMenu = "#00B4E5";
            break;
          default:
            console.log(id);
            //document.location.href = "/404.html";
        }

        return stringHeader;
      }
    };
  });
