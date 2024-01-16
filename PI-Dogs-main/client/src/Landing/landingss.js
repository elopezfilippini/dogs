import "./landing.css"
import {Link} from "react-router-dom"
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import {AddDog, getTemps} from "../Redux/Actions.js"
import { AddAllDogs} from "../Redux/Actions.js";


// una pagina de aterrizaje, 
// -Imagen de fondo representativa del proyecto
//- boton para ingresar al Home Page
function Landing (){
    const dispatch = useDispatch();
   
dispatch(AddAllDogs());
dispatch(getTemps());
  
    return (<div class="bloqueContainer"><div class="bloque">
        <Link to={'/home'}> <button class="boton-hueso">Guau!!</button></Link><h1 class="texto"> La app de los perros 🦴</h1>
        </div>
        <div class="contenedorImagen"><img className="imagenperro"src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce8b1e76965389.5c7945b0cffef.gif" title ="don´t chase me...wof!"></img></div>
    </div>)
}        

export default Landing