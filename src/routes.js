angular
  .module('smedi')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('smedi', {
      url: '/',
      templateUrl: 'app/editor.template.html'
    });
}
