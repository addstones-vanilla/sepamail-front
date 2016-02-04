(function () {
  'use strict';

  angular.module('sepamailFrontApp')
    .directive('containerTabCollapse', containerTabCollapse);

  function containerTabCollapse() {
    return {
      restrict: 'E',
      transclude: true,
      templateUrl: 'views/templates/containerTabCollapse.html',
      controller: function ($scope) {

        var pannels = [];

        this.addPanelCollapse = function (pannel) {
          pannels.push(pannel);
        };

        this.opening = function (selectedPannel) {
          pannels.forEach(function (pannel) {
            if (selectedPannel !== pannel) {
              pannel.showPannel = false;
            }
          });
        };

      }
    };
  };

})();
