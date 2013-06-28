'use strict';

/* Directives */


angular.module('myApp.directives', []).
    directive('appVersion', ['version', function (version) {
        return function (scope, elm, attrs) {
            elm.text(version);
        };
    }
]).directive('focusOnLoad', function() {
        return function (scope, element) {
            element[0].focus();
        };
    }
);
