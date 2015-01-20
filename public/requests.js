$(document).ready(function() {
  //   global username variable is stored in URL string which is accessed by window.location.search. Slice to get just username

  //populate the array of rooms with all unique rooms
  $.ajax({
    url: 'localhost:3000/',
    // sets data parameter based on user input above
    // data: { order: "-createdAt", limit: 500 },
    type: 'POST',
    contentType: 'application/json',
    success: function (results) {
      console.log(results);
      // function drawRegionsMap() {
      //   var data = google.visualization.arrayToDataTable(
      //     [['Germany'],['USA'],['Finland'],['UAE']]
      //   );
      //   var options = {};
      //   var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
      //   chart.draw(data, options);
      // }
      // $('body').append($option);
      },
    error: function (data) {
      console.error('chatterbox: Failed to receive message');
    }
  });

    // ajax call to POST message
  // $.ajax({
  //   url: 'https://api.parse.com/1/classes/chatterbox',
  //   type: 'POST',
  //   data: JSON.stringify(message),
  //   contentType: 'application/json',
  //   success: function (data) {
  //     console.log('chatterbox: Message sent');
  //   },
  //   error: function (data) {
  //     console.error('chatterbox: Failed to send message');
  //   }
  // });
});
