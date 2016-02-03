(function() {
    'use strict';

    angular.module("sepamailFrontApp")
        .directive('pannelCollapse', pannelCollapse);

    function pannelCollapse() {
        return {
            restrict: 'EA',
            require: '^containerCollapse',
            transclude: true,
            templateUrl: "views/templates/pannelCollapse.html",
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
