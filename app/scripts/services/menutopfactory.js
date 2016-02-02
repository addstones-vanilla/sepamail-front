'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.menuTopFactory
 * @description
 * # menuTopFactory
 * Factory in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('menuTopFactory', function (headerFactory) {
    // Public API here
    return {
      getMenu: function (namespace, bankName) {

        var stringHeader;

        switch(namespace){
          case "arrive":
            stringHeader=
              "<nav class='navbar navbar-default' style='background-color:" + headerFactory.colorMenu + "'>" +
                "<div class='container'>" +
                  "<ul class='nav navbar-nav'>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/arrive/accueil'>Accueil</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/arrive/formulaire'>Creer Mandat</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/arrive/listeMandats'>Mandats non signés</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/arrive/listeMandats'>Mandats signés</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/arrive/listeMandats'>Mandats historisés</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/arrive/listeAnomalies'>Suivi des anomalies</a>" +
                    "</li>" +
                  "</ul>" +
                "</div>" +
              "</nav>";
            break;


          case "depart":
            stringHeader=
              "<nav class='navbar navbar-default' style='background-color:" + headerFactory.colorMenu + "'>" +
                "<div class='container'>" +
                  "<ul class='nav navbar-nav'>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/depart/accueil'>Accueil</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/depart/listeOperations'>Changement de domiciliation</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/depart/listeEmetteurs'>Suivi des remises</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/depart/listeAnomalies'>Suivi des anomalies</a>" +
                    "</li>" +
                  "</ul>" +
                "</div>" +
              "</nav>";
            break;

          case "emetteur":
            stringHeader=
              "<nav class='navbar navbar-default' style='background-color:" + headerFactory.colorMenu + "'>" +
                "<div class='container'>" +
                  "<ul class='nav navbar-nav'>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/emetteur/accueil'>Accueil</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/emetteur/listeMandats'>Mandats de mobilité</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/emetteur/listeAnomalies'>Suivi des anomalies</a>" +
                    "</li>" +
                  "</ul>" +
                "</div>" +
              "</nav>";
            break;

          default:
            stringHeader="<div></div>";
            //document.location.href = "/404.html";
        }

        return stringHeader;
      }
    };
  });
