const request=require('postman-request');

const reverseGeocode=(coordenada,callback)=>{
    let urlLatLon=`https://us1.locationiq.com/v1/reverse.php?key=pk.31a63e6b81c00dee6de7bb773728f11c&lat=${coordenada.lat}&lon=${coordenada.lon}&format=json`;    
    request(urlLatLon,(error,response,body)=>{
        if (error){
            callback('Ocurrio un error',undefined);
        } else{
            let data=JSON.parse(body);
            callback(undefined,{
                pais:data.address.country,
                estado:data.address.state,
            });
        }
    })
}
module.exports=reverseGeocode;