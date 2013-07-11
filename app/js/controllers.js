'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MemeSelectCtrl', [function () {

    }
]).controller('MemeCreateCtrl', ['$scope', 'textRenderTop', 'textRenderBottom', function ($scope, textRenderTop, textRenderBottom) {

        $scope.textTop = '';

        $scope.textBottom = '';

        $scope.$watch('textTop', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                textRenderTop.draw(newValue);
            }
        }, true);

        $scope.$watch('textBottom', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                textRenderBottom.draw(newValue);
            }
        }, true);
    }
]);

