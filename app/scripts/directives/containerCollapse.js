(function() {
    'use strict';

    angular.module('sepamailFrontApp')
        .directive('containerCollapse', containerCollapse);

    function containerCollapse() {
        return {
            restrict: 'E',
            transclude: true,
            //scope: {},
            templateUrl: 'views/templates/containerCollapse.html',
            controller: function($scope) {

                var pannels = [];

                this.addPanelCollapse = function(pannel) {
                    pannels.push(pannel);
                    console.log(pannels);
                };

                this.opening = function(selectedPannel) {
                    pannels.forEach(function(pannel) {
                        if (selectedPannel != pannel) {
                           pannel.showPannel = false;
                        }
                    });
                };

            },
        };
    };

})();
