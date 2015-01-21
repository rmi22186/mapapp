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
  CountryList.findOne({name: 'tina'}, function(err, result) {
    var newerCountryList = request.body.country.toLowerCase();
    // prepare new and old country lists
    if (!result) {
      console.log('create');
      var newCountryList = new CountryList({'name':'tina'}, {'countries': newerCountryList.toLowerCase()});
      newCountryList.save(function(err, result) {
        if (err) {console.log(err);}
        else { console.log(result);}
        response.send();
      });
    } else {
      var oldCountries = result.countries;

      oldCountries = result.countries.split(',');
      console.log(oldCountries);
      
      if (oldCountries.indexOf(newerCountryList) === -1) {  
        oldCountries.push(newerCountryList);
        var query = {name: 'tina'};
        CountryList.update(query, { countries: oldCountries }, function(err, result) {
          if (err) {console.log(err); }
          console.log('updated!!');
          response.send();
        });
      } else {
        console.log('already here!');
        oldCountries.splice(oldCountries.indexOf(newerCountryList),1);
        var query = {name: 'tina'};
        CountryList.update(query, { countries: oldCountries }, function(err, result) {
          if (err) {console.log(err); }
          console.log('updated!!');
          response.send();
        });
      } 
    } 
  });
});

app.get('/countriesVisited', function(request, response) {
  CountryList.findOne({name: 'tina'}, function(err, result) {
    console.log(result.countries);
    response.send(result.countries);
  });
});