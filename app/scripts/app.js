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
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/formroute', {
        templateUrl: 'views/formroute.html',
        controller: 'FormrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
