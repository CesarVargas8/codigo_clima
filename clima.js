const request=require('postman-request');

const clima=(estado,callback)=>{
    let urlLatLon=`http://api.weatherstack.com/current?access_key=d9c12e74fab1ef4e941eea285714d7ba&query=${estado}`;    
    request(urlLatLon,(error,response,body)=>{
        if (error){
            callback('Ocurrio un error',undefined);
        } else{
            let data=JSON.parse(body);
            callback(undefined,{
                clima:data.current.temperature,
            });
        }
    })
}
module.exports=clima;