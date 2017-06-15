angular.module('mainModule.sidebar', [])
  .directive('sidebar', function () {
    return {
      templateUrl: 'components/layout/sidebar/sidebar.html'
    };
  });