import "./searchbar.css"
import { useState } from "react";
export default function SearchBar(props){
    const [id, setId] = useState("");

    function cambio(evento) {
      setId(evento.target.value);
      console.log(id);
    }

    function precambio() {
   
        //  evento.target.value = "";
         props.onSearch(id); // Llamar a onSearch aquí después de actualizar el estado
         
     
       }

return(<div class="search-container">
<input class="input" onChange={cambio} value={id} type="text"  title="Ingrese un ID o raza del perro que busca."
/><button class = "button" onClick={precambio}>Ingresar</button></div>
)

}