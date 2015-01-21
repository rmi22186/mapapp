angular.module('mapapp.countriesVisited', [])

.controller('countriesVisitedController', function ($scope, $http) {
  $scope.country = {};
  $scope.country.test = [];

  $scope.timer = 60;

  $scope.addCountry = function(country) {
    $scope.country.name = '';
    return $http({
      method: 'POST',
      url: '/countriesVisited',
      data: JSON.stringify({country: country})
    }).
    then(function(res) {
      console.log('hi!');
    }).
    then(function(res) {
      $scope.getCountries();
      if ($scope.timer === 60) {
        setInterval(function() {
          $scope.timer--;
        }, 1000);
      }

      setInterval(function() {
        if ($scope.timer >= -2 && $scope.timer <=0) {
          alert('GAME OVER! YOU MISSED A LOT OF COUNTRIES...TRY AGAIN!');
        }
      }, 500);
    });
  };


  $scope.getCountries = function() {
    return $http({
      method: 'GET',
      url: '/countriesVisited'})
    .then(function(res) {
      var splitCountries = res.data.split(',');

      //logic to add to scope to display angularly
        // $scope.country.test = [];
        // var newObj = {};
        // newObj.value = 'country';
        // $scope.country.test.push(newObj);
        // for (var i = 0; i<splitCountries.length; i++) {
        //   var newObj1 = {};
        //   newObj1.value = splitCountries[i];
        //   $scope.country.test.push(newObj1);
        //   console.log($scope.country);
        // }
      // logic for drawRegionsMap();

      $scope.renderData = [];
      for (var j = 0; j<splitCountries.length; j++) {
        $scope.renderData[j] = [];
        $scope.renderData[j].push(splitCountries[j]);
      }
      // $scope.renderData.unshift(["Country"]);
      drawRegionsMap();
      function drawRegionsMap() {
      var data = google.visualization.arrayToDataTable($scope.renderData);

      var options = {
          // region: '002', // Africa
          colorAxis: {colors: ['#00853f', 'black', '#e31b23']},
          backgroundColor: '#81d4fa',
          // datalessRegionColor: '#f8bbd0'
        };

      var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      chart.draw(data, options);
    }
    });
  };

});