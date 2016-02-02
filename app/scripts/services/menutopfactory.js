'use strict';

/**
 * @ngdoc service
 * @name sepamailFrontApp.menuTopFactory
 * @description
 * # menuTopFactory
 * Factory in the sepamailFrontApp.
 */
angular.module('sepamailFrontApp')
  .factory('menuTopFactory', function () {
    // Public API here
    return {
      getMenu: function (namespace, bankName) {

        var stringHeader;

        switch(namespace){
          case "arrive":
            stringHeader=
              "<nav class='navbar navbar-default'>" +
                "<div class='container'>" +
                  "<ul class='nav navbar-nav'>" +
                    "<li>" +
                      "<a>Accueil</a>" +
                    "</li>" +
                    "<li>" +
                      "<a href='/#/" + bankName + "/arrive/formulaire'>Creer Mandat</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Mandats non signés</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Mandats signés</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Mandats historisés</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Suivi des anomalies</a>" +
                    "</li>" +
                  "</ul>" +
                "</div>" +
              "</nav>";
            break;


          case "depart":
            stringHeader=
              "<nav class='navbar navbar-default'>" +
                "<div class='container'>" +
                  "<ul class='nav navbar-nav'>" +
                    "<li>" +
                      "<a>Accueil</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Changement de domiciliation</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Suivi des remises</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Suivi des anomalies</a>" +
                    "</li>" +
                  "</ul>" +
                "</div>" +
              "</nav>";
            break;

          case "emetteur":
            stringHeader=
              "<nav class='navbar navbar-default'>" +
                "<div class='container'>" +
                  "<ul class='nav navbar-nav'>" +
                    "<li>" +
                      "<a>Accueil</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Mandats de mobilité</a>" +
                    "</li>" +
                    "<li>" +
                      "<a>Suivi des anomalies</a>" +
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
