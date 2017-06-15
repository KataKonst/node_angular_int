'use strict';

angular.module('mainModule.contactus', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/contact', {
      templateUrl: 'contactus/contactus.html',
      controller: 'ContactUsCtrl'
    });
  }])
  .controller('ContactUsCtrl', function ($scope) {
    $scope.firstName='';
    $scope.lastName='';
    $scope.message='';

    $scope.submitForm=function(){
      console.log('First Name: '+$scope.firstName+'\nLast Name: '+$scope.lastName+'\nMessage: '+$scope.message)
    }

  });