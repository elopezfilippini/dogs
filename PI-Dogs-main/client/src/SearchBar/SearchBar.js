import "./searchbar.css"
import { useState } from "react";
import { resetInitialFrame } from "../Cards/cards";

export default function SearchBar(props){
    const [name, setId] = useState("");

    function cambio(evento) {
      setId(evento.target.value);

    }

    function precambio() {
   
        //  evento.target.value = "";
    
         props.onSearch(name); // Llamar a onSearch aquí después de actualizar el estado
         
     
       }

       function mostrar() {
   
        //  evento.target.value = "";
         props.showAll(); // Llamar a onSearch aquí después de actualizar el estado
         
     
       }


return(<div class="search-container">
<input class="input" onChange={cambio} value={name} type="text"  title="Ingrese un nombre de raza del perro que busca."
/><button class = "button" onClick={precambio}>Ingresar</button>\
<button class = "button" onClick={mostrar}>Todos</button></div>
)

}