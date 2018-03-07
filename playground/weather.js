const request = require('request');

var geocodeAddress = (address) =>{
  return new Promise((resolve , reject) =>{

    var abc = encodeURIComponent(address);

    request({

      url :`https://maps.googleapis.com/maps/api/geocode/json?address=${abc}&key=AIzaSyASi9tjRyBwwGBIsWYCVBUqZTLjJnUC4KQ `,
      json : true

    } , (error, response, body)=>{

      if(error){
        reject('Unable to connect to connect to servers');

      }
      else if(body.status ==='ZERO_RESULTS'){
        reject('There is no such location...')


      }
      else if(body.status === 'OK'){
        resolve( {
          address: body.results[0].formatted_address,
          latitude : body.results[0].geometry.location.lat,
          longitude :  body.results[0].geometry.location.lng
        });
      }
    });


  })


};


geocodeAddress('49400dceddsccds1').then((location) => {

      console.log(JSON.stringify(location , undefined , 2))
} , (errorMessage) =>{
    console.log(errorMessage);
});
