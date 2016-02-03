(function() {
  'use strict';

  angular.module("sepamailFrontApp")
    .directive('tabCollapse', tabCollapse);

  function tabCollapse() {
    return {
      restrict: 'EA',
      require: '^containerTabCollapse',
      transclude: true,
      templateUrl: "views/templates/tabCollapse.html",
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
