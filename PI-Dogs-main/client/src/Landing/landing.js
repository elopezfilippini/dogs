import "./landing.css"
import {Link} from "react-router-dom"
// una pagina de aterrizaje, 
// -Imagen de fondo representativa del proyecto
//- boton para ingresar al Home Page
function landing (){

    return (<div class="bloqueContainer"><div class="bloque">
        <Link to={'/home'}> <button class="boton-hueso">Guau!!</button></Link><h1 class="texto"> La app de los perros 🦴</h1>
        </div>
        <div class="contenedorImagen"><img className="imagenperro"src="https://www.gifsanimados.org/data/media/202/perro-imagen-animada-0931.gif" title ="don´t chase me...wof!"></img></div>
    </div>)
}        

export default landing