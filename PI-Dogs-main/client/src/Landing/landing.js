import "./landing.css"
import {Link} from "react-router-dom"
// una pagina de aterrizaje, 
// -Imagen de fondo representativa del proyecto
//- boton para ingresar al Home Page
function landing (){

    return (<div class="bloque"><Link to={'/home'}> <button class="boton-hueso">Guau!!</button></Link><h1 class="texto"> La app de los perros 🦴</h1>
   
    </div>)
}

export default landing