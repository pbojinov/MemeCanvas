'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MemeSelectCtrl', [function () {

    }
]).controller('MemeCreateCtrl', ['$scope', 'textRender', function ($scope, textRender) {

        $scope.text = {
            top: '50',
            bottom: '50'
        };

        $scope.$watch('text', function(newValue, oldValue) {
            if (newValue !== oldValue) {
                textRender.draw(newValue.top, newValue.bottom);
            }
        }, true);
    }
]);

