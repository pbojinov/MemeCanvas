'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers', 'myApp.factories']).
    config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/select', {templateUrl:'partials/meme-select.html', controller:'MemeSelectCtrl'});
    $routeProvider.when('/create', {templateUrl:'partials/meme-create.html', controller:'MemeCreateCtrl'});
    $routeProvider.otherwise({redirectTo:'/select'});
}]);
