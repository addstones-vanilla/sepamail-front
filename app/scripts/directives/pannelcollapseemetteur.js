(function () {
  'use strict';

  angular.module("sepamailFrontApp")
    .directive('pannelCollapseEmetteur', pannelCollapseEmetteur);

  function pannelCollapseEmetteur() {
    return {
      restrict: 'EA',
      require: '^containerCollapse',
      transclude: true,
      scope: {
        title: '@',
        value: '@'
      },
      templateUrl: "views/templates/pannelCollapseEmetteur.html",
      link: function (scope, element, attrs, containerCtrl) {

        scope.showPannel = false;

        containerCtrl.addPanelCollapse(scope);

        scope.toogleVisibility = function () {
          scope.showPannel = !scope.showPannel;
          containerCtrl.opening(this);
        };

      }
    }
  }


})();
