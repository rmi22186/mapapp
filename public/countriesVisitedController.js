angular.module('mapapp.countriesVisited', [])

.controller('countriesVisitedController', function ($scope, $http) {
  $scope.country = {};


  $scope.addCountry = function(country) {
    console.log(JSON.stringify(country));
    return $http({
      method: 'POST',
      url: '/countriesVisited',
      data: JSON.stringify({country: country}),
      success: function() {
        console.log('success!');
      },
      error: function() {
        console.log('you fail!');
      }
    });
  };

  $scope.getCountries = function() {
    return $http({
      method: 'GET',
      url: '/countriesVisited'})
    .then(function(res) {
      console.log(res);
    // })
    //   // data: countries,
    //   success: function(response) {
    //     console.log('hi!');
    //   },
    //   error: function() {
    //     console.log('you fail!');
      // }
    });
  };

});