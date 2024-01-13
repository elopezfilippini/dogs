

export default function validateTemp(input,Temps){

    
    const errors = {}

    console.log("VALIDATIONTEMPONGOIN")
    if ( !Temps.some(temp => temp.name.toLowerCase() === input.temperament.toLowerCase())) { errors.temperament = "Ingrese un valor correcto"} 
    
    
    //  else if (Temps.some(temp => temp.name === input.temperament)) errors.setTemperament = true
     
    return errors}