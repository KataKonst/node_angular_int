'use strict';

angular.module('mainModule.products', ['ngRoute', 'mainModule.productsService'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/products', {
      templateUrl: 'products/products.html',
      controller: 'ProductsCtrl'
    });
  }])
  .controller('ProductsCtrl', function ($scope, productsService) {
    productsService.getAll().then(function (response) {
      $scope.items = response.data;
    })
  });