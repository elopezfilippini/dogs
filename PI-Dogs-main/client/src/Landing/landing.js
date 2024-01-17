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
  
    return (<div class="landing">
        <div class="contenedorImagen">
        <img className="huella"src="https://i.ibb.co/RhKRsCx/klipartz-com.png" ></img>
        <h1 class="titulodepagina">La app de los perros🦴</h1>
        <h1 class="subtitulo">buscá y crea tus razas favoritas</h1>

        <Link to={'/home'}> <button class="boton-hueso">Guau!!</button></Link>
        <img className="imagenperro"src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ce8b1e76965389.5c7945b0cffef.gif" title =""></img></div>
    </div>)
}        

export default Landing