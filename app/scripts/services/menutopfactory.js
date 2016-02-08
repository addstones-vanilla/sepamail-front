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
              "<nav class='navbar navbar-default' style='background-color:" + headerFactory.colorMenu + "; border-color:" + headerFactory.colorMenu + "'>" +
                "<div class='container-fluid'>" +
                  "<div class='navbar-header'>" +
                    "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#arrive-navbar-collapse-1' aria-expanded='false'>"+
                      "<span class='sr-only'>Toggle navigation</span>"+
                      "<span class='icon-bar'></span>"+
                      "<span class='icon-bar'></span>"+
                      "<span class='icon-bar'></span>"+
                    "</button>"+
                    "<a class='navbar-brand' href='#/" + bankName + "/arrive/accueil'>Accueil</a>"+
                  "</div>" +
                  "<div class='collapse navbar-collapse' id='arrive-navbar-collapse-1'>"+
                    "<ul class='nav navbar-nav'>"+
                      "<li>" +
                        "<a href='#/" + bankName + "/arrive/formulaire'>Creer Mandat</a>" +
                      "</li>" +
                      "<li>" +
                        "<a href='#/" + bankName + "/arrive/listeMandats/non-signe'>Mandats non signés</a>" +
                      "</li>" +
                      "<li>" +
                        "<a href='#/" + bankName + "/arrive/listeMandats/signe'>Mandats signés</a>" +
                      "</li>" +
                      "<li>" +
                        "<a href='#/" + bankName + "/arrive/listeMandats/historique'>Mandats historisés</a>" +
                      "</li>" +
                      "<li>" +
                        "<a href='#/" + bankName + "/arrive/listeAnomalies'>Suivi des anomalies</a>" +
                      "</li>" +
                    "</ul>" +
                  "</div>" +
                "</div>" +
              "</nav>";
            break;


          case "emetteur":

            stringHeader=
              "<nav class='navbar navbar-default' style='background-color:" + headerFactory.colorMenu + "; border-color:" + headerFactory.colorMenu + "'>" +
              "<div class='container-fluid'>" +
              "<div class='navbar-header'>" +
              "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#depart-navbar-collapse-1' aria-expanded='false'>"+
              "<span class='sr-only'>Toggle navigation</span>"+
              "<span class='icon-bar'></span>"+
              "<span class='icon-bar'></span>"+
              "<span class='icon-bar'></span>"+
              "</button>"+
              "<a class='navbar-brand' href='#/" + bankName + "/emetteur/accueil'>Accueil</a>"+
              "</div>" +
              "<div class='collapse navbar-collapse' id='depart-navbar-collapse-1'>"+
              "<ul class='nav navbar-nav'>"+
              "<li>" +
              "<a href='#/" + bankName + "/emetteur/listedomiciliation'>Changement de domiciliation</a>" +
              "</li>" +
              "<li>" +
              "<a href='#/" + bankName + "/emetteur/suiviRemises'>Suivi des remises</a>" +
              "</li>" +
              "<li>" +
              "<a href='#/" + bankName + "/emetteur/listeAnomalies'>Suivi des anomalies</a>" +
              "</li>" +
              "</ul>" +
              "</div>" +
              "</div>" +
              "</nav>";
            break;

          case "depart":
          stringHeader=
              "<nav class='navbar navbar-default' style='background-color:" + headerFactory.colorMenu + "; border-color:" + headerFactory.colorMenu + "'>" +
              "<div class='container-fluid'>" +
              "<div class='navbar-header'>" +
              "<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#emetteur-navbar-collapse-1' aria-expanded='false'>"+
              "<span class='sr-only'>Toggle navigation</span>"+
              "<span class='icon-bar'></span>"+
              "<span class='icon-bar'></span>"+
              "<span class='icon-bar'></span>"+
              "</button>"+
              "<a class='navbar-brand' href='#/" + bankName + "/depart/accueil'>Accueil</a>"+
              "</div>" +
              "<div class='collapse navbar-collapse' id='emetteur-navbar-collapse-1'>"+
              "<ul class='nav navbar-nav'>"+
              "<li>" +
              "<a href='#/" + bankName + "/depart/listeMobilite'>Mandats de mobilité</a>" +
              "</li>" +
              "<li>" +
              "<a href='#/" + bankName + "/depart/listeAnomalies'>Suivi des anomalies</a>" +
              "</li>" +
              "</ul>" +
              "</div>" +
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
