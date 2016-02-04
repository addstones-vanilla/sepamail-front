(function() {
  'use strict';

  angular.module("sepamailFrontApp")
    .directive('tabCollapseMobilite', tabCollapseMobilite);

  function tabCollapseMobilite() {
    return {
      restrict: 'A',
      require: '^containerTabCollapse',
      transclude: true,
      templateUrl: "views/templates/tabCollapseMobilite.html",
      link: function(scope, element, attrs, containerCtrl)  {

        scope.showPannel = false;

        containerCtrl.addPanelCollapse(scope);

        scope.toogleVisibility = function() {
          scope.showPannel = !scope.showPannel;
          containerCtrl.opening(this);
        };

      }
    }
  }


})();
