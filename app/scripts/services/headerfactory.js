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
      colorMenu: "#A9ACAC",
      getBank: function (id) {

        var stringHeader;

        switch(id){
          case "socgen":
            stringHeader="<div style='color:white; background-color:#1D1D1B'>" +
              "<img src='./images/banques/societe-generale.jpg' height='100'>" +
          "</div>";
            this.colorMenu = "#E20030";
            break;
          case "lcl":
            stringHeader="<div style='color:white; background-color:#21368B'>" +
              "<img src='./images/banques/lcl.png' height='100'>" +
              "</div>";
            this.colorMenu = "#00B4E5";
            break;
          case "fortuneo":
            stringHeader="<div style='color:white; background-color:#a0e442'>" +
              "<img src='./images/banques/fortuneo.jpg' height='100'>" +
              "</div>";
            this.colorMenu = "#232323";
            break;
          case "cmb":
            stringHeader="<div style='color:white; background-color:#FFFFFF'>" +
              "<img src='./images/banques/cmb.png' height='100'>" +
              "</div>";
            this.colorMenu = "#CA1317";
            break;
          default:
            //document.location.href = "/404.html";
        }

        return stringHeader;
      }
    };
  });
