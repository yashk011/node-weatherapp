const request =  require('request');
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


const geocoding = require('./geocode/geocode');

geocoding.geocodeAddress(argv.address,(errorMessage, results) => {

  if(errorMessage) {
    console.log(errorMessage);
  }
  else if(results){

    console.log(results.address);

    const weather =  require('./weather/weather');
    weather.getWeather(results.latitude , results.longitude , (errorMessage, weatherResults) => {
     if(errorMessage){
       console.log(errorMessage);
     }
     else if(weatherResults){
       console.log(`Its currently ${weatherResults.temp} but it feels like ${weatherResults.actualTemp} `);
     }


    });




  }

});





//console.log(argv);
