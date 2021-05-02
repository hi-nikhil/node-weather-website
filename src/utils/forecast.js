const  request=require('request')
const forecast=(longitude,latitude,callback) =>{
    const url='http://api.openweathermap.org/data/2.5/weather?lat='+ encodeURIComponent(latitude)+'&lon='+ encodeURIComponent(longitude)+'&appid=41dff3201b3ea60239138a3291ba0209&units=metric'
       
     request({url,json :true},(error,{body})=>{
       if(error){
         callback('Unable to connect to internet',undefined)
       }else if(body.cod == 400)
       {
            callback('Unable to find location.Try another location!',undefined)
       }
       else{
         callback(undefined,
          'It is ' + body.main.temp+' degrees out. '+ 'It is '+body.weather[0].description+' outside '+
          'The minimun temperature is '+  body.main.temp_min +' and the maximun temperature is '+ body.main.temp_max +' today.'
         )

       }
     })
  }
  module.exports =forecast