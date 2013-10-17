'use strict';


// Declare app level module which depends on filters, and services
angular.module('angularDemo', [
  'ngRoute',
  'angularDemo.filters',
  'angularDemo.services',
  'angularDemo.directives',
  'angularDemo.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {templateUrl: '/apex/partial1', controller: 'MyCtrl1'});
  //$routeProvider.when('/view2', {templateUrl: '/apex/partial2', controller: 'MyCtrl2'});
  $routeProvider.when('/view2', {templateUrl: angularImplPath + '/app/partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);