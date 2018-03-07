const request = require('request');
var getWeather = (lat , lng , callback) =>{

request({
  url :`https://api.darksky.net/forecast/3e6f054a4407db7af2cd9603a47bfcb9/${lat},${lng}` ,
  json: true

}, (error , response , body) => {

      if(error){
        callback('Unable to connect to server');
      }
      else if(response.statusCode === 400){
        callback('unable to fetch weather');
      }
      else if(response.statusCode === 200){
        callback(undefined ,{
          temp : body.currently.temperature ,
          actualTemp : body.currently.apparentTemperature
         }
        );
      }

});



}
module.exports ={

  getWeather ,
  request

}
