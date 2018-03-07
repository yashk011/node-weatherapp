const axios = require('axios');
const yargs = require('yargs');
const argv = yargs
          .options({
            a : {
              demand : true,
              alias : 'address',
              describe :' enter the address ',
              string : true

            }
          })
          .help()
          .alias('help' , 'h')
          .argv;

var abc = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${abc}&key=AIzaSyASi9tjRyBwwGBIsWYCVBUqZTLjJnUC4KQ`;

axios.get(geocodeUrl).then((response) => {

  if(response.data.status ==='ZERO_RESULTS'){
    throw new Error('cant find any such location..');
  }
    var lat = response.data.results[0].geometry.location.lat;
    var lng = response.data.results[0].geometry.location.lng;
    var weatherUrl = `https://api.darksky.net/forecast/3e6f054a4407db7af2cd9603a47bfcb9/${lat},${lng}`;

    console.log(response.data.results[0].formatted_address);
    return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`Its currently ${temperature} but it feels like ${apparentTemperature} `);
}).catch((e) =>{
  if(e.code ==='ENOTFOUND'){
    console.log('Cant connect to  APIS server');
  }
  else{
    console.log(e.message);
  }

});
