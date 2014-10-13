'use strict';

/**
 * @ngdoc overview
 * @name entityFormApp
 * @description
 * # entityFormApp
 *
 * Main module of the application.
 */
angular
  .module('entityFormApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'FormrouteCtrl'
      })
      .when('/parceiro', {
        templateUrl: 'views/parceiro.html',
        controller: 'ParceiroCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
