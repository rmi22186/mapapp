function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable(
          [['Germany'],['USA'],['Finland'],['UAE']]
        );

        var options = {};

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }