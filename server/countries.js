var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mapapp');

var countryListSchema = new mongoose.Schema({
  name: 'String',
  countries: String
});

var CountryList = mongoose.model('Countries', countryListSchema);

module.exports = CountryList;

// var newCountryList = new CountryList({name: 'robert', countries: "['Albania','Armenia','Angola','Antarctica','Argentina','American Samoa']"});

// newCountryList.save(function(err, result) {
//   if (err) { console.log('error!');}
//     else { console.log('it worked!!');}
// });

// var newCountryList = new CountryList({name: 'jake', countries: "Andorra,UAE,Afghanistan"});

// newCountryList.save(function(err, result) {
//   if (err) { console.log('error!');}
//     else { console.log('it worked!!');}
// });

var countries = [
"Andorra",
"United Arab Emirates",
"Afghanistan",
"Antigua and Barbuda",
"Anguilla",
"Albania",
"Armenia",
"Angola",
"Antarctica",
"Argentina",
"American Samoa",
"Austria",
"Australia",
"Aruba",
"Aland Islands",
"Azerbaijan",
"Bosnia and Herzegovina",
"Barbados",
"Bangladesh",
"Belgium",
"Burkina Faso",
"Bulgaria",
"Bahrain",
"Burundi",
"Benin",
"Saint BarthÈlemy",
"Bermuda",
"Brunei Darussalam",
"Bolivia",
"Caribbean Netherlands ",
"Brazil",
"Bahamas",
"Bhutan",
"Bouvet Island",
"Botswana",
"Belarus",
"Belize",
"Canada",
"Cocos (Keeling) Islands",
"Congo, Democratic Republic of",
"Central African Republic",
"Congo",
"Switzerland",
"CÙte d'Ivoire",
"Cook Islands",
"Chile",
"Cameroon",
"China",
"Colombia",
"Costa Rica",
"Cuba",
"Cape Verde",
"CuraÁao",
"Christmas Island",
"Cyprus",
"Czech Republic",
"Germany",
"Djibouti",
"Denmark",
"Dominica",
"Dominican Republic",
"Algeria",
"Ecuador",
"Estonia",
"Egypt",
"Western Sahara",
"Eritrea",
"Spain",
"Ethiopia",
"Finland",
"Fiji",
"Falkland Islands",
"Micronesia, Federated States of",
"Faroe Islands",
"France",
"Gabon",
"United Kingdom",
"Grenada",
"Georgia",
"French Guiana",
"Guernsey",
"Ghana",
"Gibraltar",
"Greenland",
"Gambia",
"Guinea",
"Guadeloupe",
"Equatorial Guinea",
"Greece",
"South Georgia and the South Sandwich Islands",
"Guatemala",
"Guam",
"Guinea-Bissau",
"Guyana",
"Hong Kong",
"Heard and McDonald Islands",
"Honduras",
"Croatia",
"Haiti",
"Hungary",
"Indonesia",
"Ireland",
"Israel",
"Isle of Man",
"India",
"British Indian Ocean Territory",
"Iraq",
"Iran",
"Iceland",
"Italy",
"Jersey",
"Jamaica",
"Jordan",
"Japan",
"Kenya",
"Kyrgyzstan",
"Cambodia",
"Kiribati",
"Comoros",
"Saint Kitts and Nevis",
"North Korea",
"South Korea",
"Kuwait",
"Cayman Islands",
"Kazakhstan",
"Lao People's Democratic Republic",
"Lebanon",
"Saint Lucia",
"Liechtenstein",
"Sri Lanka",
"Liberia",
"Lesotho",
"Lithuania",
"Luxembourg",
"Latvia",
"Libya",
"Morocco",
"Monaco",
"Moldova",
"Montenegro",
"Saint-Martin (France)",
"Madagascar",
"Marshall Islands",
"Macedonia",
"Mali",
"Myanmar",
"Mongolia",
"Macau",
"Northern Mariana Islands",
"Martinique",
"Mauritania",
"Montserrat",
"Malta",
"Mauritius",
"Maldives",
"Malawi",
"Mexico",
"Malaysia",
"Mozambique",
"Namibia",
"New Caledonia",
"Niger",
"Norfolk Island",
"Nigeria",
"Nicaragua",
"The Netherlands",
"Norway",
"Nepal",
"Nauru",
"Niue",
"New Zealand",
"Oman",
"Panama",
"Peru",
"French Polynesia",
"Papua New Guinea",
"Philippines",
"Pakistan",
"Poland",
"St. Pierre and Miquelon",
"Pitcairn",
"Puerto Rico",
"Palestine, State of",
"Portugal",
"Palau",
"Paraguay",
"Qatar",
"RÈunion",
"Romania",
"Serbia",
"Russian Federation",
"Rwanda",
"Saudi Arabia",
"Solomon Islands",
"Seychelles",
"Sudan",
"Sweden",
"Singapore",
"Saint Helena",
"Slovenia",
"Svalbard and Jan Mayen Islands",
"Slovakia",
"Sierra Leone",
"San Marino",
"Senegal",
"Somalia",
"Suriname",
"South Sudan",
"Sao Tome and Principe",
"El Salvador",
"Sint Maarten (Dutch part)",
"Syria",
"Swaziland",
"Turks and Caicos Islands",
"Chad",
"French Southern Territories",
"Togo",
"Thailand",
"Tajikistan",
"Tokelau",
"Timor-Leste",
"Turkmenistan",
"Tunisia",
"Tonga",
"Turkey",
"Trinidad and Tobago",
"Tuvalu",
"Taiwan",
"Tanzania",
"Ukraine",
"Uganda",
"United States Minor Outlying Islands",
"United States",
"Uruguay",
"Uzbekistan",
"Vatican",
"Saint Vincent and the Grenadines",
"Venezuela",
"Virgin Islands (British)",
"Virgin Islands (U.S.)",
"Vietnam",
"Vanuatu",
"Wallis and Futuna Islands",
"Samoa",
"Yemen",
"Mayotte",
"South Africa",
"Zambia",
"Zimbabwe"];

// CountryList.findOne({name:'robert'}, function(err, res) {
//   var results = [];
//   for (var i = 0; i<res.countries.length; i++) {
//     results[i] = [];
//     results[i].push(res.countries[i]);
//   }
//   results.unshift(["Country"]);
//   console.log(results);
// });