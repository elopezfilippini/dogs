

export default function validate(input,Temps){

const cal = Temps
    console.log(cal)
const contienenumero=  /^\d+$/

const errors = {}
if (!input.name) {
    errors.name = "Debe ingresar un nombre";
  } else if (!input.maxHeight) {
    errors.maxHeight = null
  } else if (!contienenumero.test(Number(input.maxHeight))) {
    errors.maxHeight = "La altura debe ser un número"}
    else if (!input.minHeight) {
        errors.minHeight = null}
 else if (!contienenumero.test(input.minHeight))  errors.minHeight = "La altura debe ser un número."    
 else if (!input.weightMax) {
    errors.weightMax = null}
 else if (!contienenumero.test(input.weightMax))  errors.weightMax = "El peso debe ser un número." 
 else if (!input.weightMin) {
    errors.weightMin = null}    
 else if (!contienenumero.test(input.weightMin))  errors.weightMin = "El peso debe ser un número."     
 else if (!input.spanLife) {
    errors.spanLife = null}    
 else if (!contienenumero.test(input.spanLife))  errors.spanLife = "La expectativa de Vida debe ser un numero."     


 else if ( !input.name||!input.maxHeight||!input.minHeight||!input.minHeight||!input.weightMax||!input.weightMin||!input.spanLife) { errors.allFilled = "Hay campos obligatorios por completar." }    

//  else if (Temps.some(temp => temp.name === input.temperament)) errors.setTemperament = true
 
return errors}