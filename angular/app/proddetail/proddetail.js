'use strict';

angular.module('mainModule.productsDetail', ['ngRoute','mainModule.productsService'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/product/:id', {
    templateUrl: 'proddetail/proddetail.html',
    controller: 'ProdDetailCtrl'
  });
}])
.controller('ProdDetailCtrl', function($scope,productsService,$routeParams) {
    productsService.getProduct($routeParams.id).then(function(product){
           $scope.product=product;
    })

});