'use strict';

// Declare app level module which depends on views, and components
angular.module('mainModule', [
  'ngRoute',
  'mainModule.home',
  'mainModule.sidebar',
  'mainModule.navbar',
  'mainModule.contactus',
    'mainModule.products',
    'mainModule.productsDetail']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}])
