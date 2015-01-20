var express = require('express');
var partials = require('express-partials');
var bodyParser = require('body-parser');
var app = express();
var CountryList = require('./server/countries.js');

var port = process.env.PORT || 3000;
var host = process.env.host || '127.0.0.1';

app.listen(port);

console.log('Server now listening on port ' + port);

app.set('views', __dirname + '/views');
app.use(partials());
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
// app.use(express.cookieParser('shhhh, very secret'));
// app.use(express.session());

// app.get('/', function(req, res) {
//  res.render('/public/index.html') ;
// });

module.exports = app;

app.post('/countriesVisited', function(request, response) {
  CountryList.findOne({name: 'jake'}, function(err, result) {
    var newCountryList = request.body.country;
    var oldCountries = result.countries.split(',');
    // console.log("newCountryList: " + newCountryList);
    // console.log(Array.isArray(oldCountries));
    oldCountries.push(newCountryList);
    // console.log(oldCountries);
    var query = {name: 'jake'};
    CountryList.update(query, { countries: oldCountries }, null, function(err, result) {
      if (err) {console.log(err); }
      // if (result) {console.log(result); }
    });
  });
});

app.get('/countriesVisited', function(request, response) {
  CountryList.findOne({name: 'jake'}, function(err, result) {
    // console.log('yay!');
    console.log(result.countries);
    response.send(result.countries);

    // var newCountryList = request.body.country;
    // var oldCountries = result.countries.split(',');
    // console.log("newCountryList: " + newCountryList);
    // console.log(Array.isArray(oldCountries));
    // oldCountries.push(newCountryList);
    // console.log(oldCountries);
    // var query = {name: 'jake'};
    // CountryList.update(query, { countries: oldCountries }, null, function(err, result) {
    //   if (err) {console.log(err); }
    //   if (result) {console.log(result); }
    // });
  });
});