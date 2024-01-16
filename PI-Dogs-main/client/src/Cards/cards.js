import Card from "../Card/card.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { OrderDog } from "../Redux/Actions.js";
import { OrderDogW } from "../Redux/Actions.js";
import { filterDogs } from "../Redux/Actions.js";
import { useDispatch } from "react-redux";
import { filtroOrigin } from "../Redux/Actions.js";
import "./cards.css";


function Cards(props) {

  const dispatch = useDispatch()
  const perros = useSelector((state) => state.dogs);
  const maxShow = 8
  const [initialFrame,setFrame] = useState(0)
  const [adeshabilitado,setdeshabilitado] = useState(true)
  const [deshabilitado,setdeshabilitadoad] = useState(false)
  
  useEffect(() => {
setFrame(0)    
  }, [perros]);
 
  
  const lastFrame = Math.min(initialFrame + maxShow, perros.length);
  const dogShow = perros.slice(initialFrame,lastFrame) 
 
  function avPag(){
    setFrame(initialFrame+8)
    setdeshabilitado(false)
    if (dogShow.length < 8) setdeshabilitadoad(true)
  }
  const filtro = (event) => {
    dispatch(filterDogs(event.target.value));
  };
  const handleOrder = (event) => {
    dispatch(OrderDog(event.target.value));
    setFrame(0)
  };
  const handleOrderW = (event) => {
    dispatch(OrderDogW(event.target.value));
  };
  function rePag(){
    setFrame(initialFrame-8)
    setdeshabilitadoad(false)

    if (initialFrame<16) setdeshabilitado(true)
  }

  const filterOrigin = (event) => {
    dispatch(filtroOrigin(event.target.value));
  };

  return (
      <div className="ampa">
          <div className="barraFiltros">
    
          <div className="ordenador">
            <label class="labelBusqueda" >Orden Alfabético:</label>
          <select   class="selector" name="Ordenado" onChange={handleOrder} >
            <option name="Orden" value="A">
              Ascendente
            </option>
            <option name="order" value="D">
              Descendente
            </option>
          </select>
        
          <label class="labelBusqueda" >Orden por Peso:</label>
          <select class="selector"  name="Peso"onChange={handleOrderW}>
            <option name="Orden" value="A">
              Ascendente
            </option>
            <option name="order" value="D">
              Descendente
            </option>
          </select>  </div>


          <div className="filtrador">
          <label class="labelBusqueda" >Temperamento:    </label>
          <select  class="selector" onChange={filtro} name="filter">
            <option value="All">Temperamento</option>
            <option value="All">All</option>
            <option value="Stubborn">Stubborn</option>
            <option value="Curious">Curious</option>
            <option value="Playful">Playful</option>
            <option value="Adventurous">Adventurous</option>
            
          </select>
          <label class="labelBusqueda" >      Origen:</label>
          <select  class="selector" onChange={filterOrigin} name="filter">
            <option value="All">Origen</option>
            <option value="All">All</option>
            <option value="Api">Dog-Api</option>
            <option value="DB">Base Dato</option>
        
           
          </select> </div>
            {/**/}

            </div>
        <div className="paginacion">
          <button className="button" disabled={adeshabilitado} onClick={rePag}>Back</button>
        <button className="button" disabled={deshabilitado} onClick={avPag}>Next</button></div>
        
            <div/>
           
          <div className="paginacion"> 
               <div className="cards-container">
        {dogShow.map((perro) => (
          <Card
          key={`${perro.id}-${perro.name}`}
            id={perro.id}
            name={perro.name}
            height={perro.height}
            weight={perro.weight}
            lifespan={perro.life_span}
            temperament={perro.temperament}
            image={perro.reference_image_id}/>))}
            <br></br>
          
            </div>    
      </div>  </div>    
      )
    }
        
        export default Cards;
  