angular.module('mainModule.navbar', [])
  .directive('navbar', function () {
    return {
      templateUrl: 'components/layout/navbar/navbar.html'
    };
  });