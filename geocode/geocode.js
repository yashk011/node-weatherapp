
var geocodeAddress = (address , callback) =>{

const request = require('request');
var abc = encodeURIComponent(address);

request({

  url :`https://maps.googleapis.com/maps/api/geocode/json?address=${abc}&key=AIzaSyASi9tjRyBwwGBIsWYCVBUqZTLjJnUC4KQ `,
  json : true

} , (error, response, body)=>{

  if(error){
    callback('Unable to connect to connect to google servers');

  }
  else if(body.status ==='ZERO_RESULTS'){
    callback('Cant Find any such location');
  }
  else if(body.status === 'OK'){
    callback(undefined , {
      address: body.results[0].formatted_address,
      latitude : body.results[0].geometry.location.lat,
      longitude :  body.results[0].geometry.location.lng
    });
  }
});

};
module.exports = {

  geocodeAddress

};
