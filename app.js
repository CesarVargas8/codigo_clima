let reverseGeocode=require('./modulos/geocode');
let clima=require('./modulos/clima');

let coordenada={
    lat:19.264962, 
    lon:-103.716204};
 
    reverseGeocode(coordenada,(error,dataResponse)=>{
    if(error){
        console.log('Ocurrio un error');
    }
    else{
        console.log(dataResponse);
        clima(dataResponse.estado,(error,dataResponse)=>{
            if (error) {
                console.log('Ocurrio un error');
            } 
            else {
                console.log(dataResponse);
            }
        });
    }
})
