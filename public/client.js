angular.module('mapapp', [
  'mapapp.countriesVisited',
  'ngRoute'
])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '/countriesvisited.html',
      controller: 'countriesVisitedController'
    });
    // .when('/', {
    //   templateUrl: '/login.html',
    //   controller: 'loginController'
    // });
});