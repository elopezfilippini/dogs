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
  const temps = useSelector((state) => state.temps);
  const maxShow = 8
  const [initialFrame,setFrame] = useState(0)
  const [adeshabilitado,setdeshabilitado] = useState(true)
  const [deshabilitado,setdeshabilitadoad] = useState(false)
  
  useEffect(() => {
setFrame(0)    
  }, [perros]);
 
  
  const lastFrame = initialFrame + maxShow
  const dogShow = perros.slice(initialFrame,lastFrame) 
  useEffect(() => {
    setFrame(0)    
      }, [perros]);

      useEffect(() => {
        setFrame(0)    
          }, [perros]);
    
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
          <div className="ampa2"style={{ display: "block", justifyContent: "flex-end", width: "480px", margin: "0 auto" }}>
    
    
            <label htmlFor="" style={{color:"white"}}>Orden Alfabético:</label>
          <select   style={{margin:"10px"}} name="Ordenado" onChange={handleOrder} >
            <option name="Orden" value="A">
              Ascendente
            </option>
            <option name="order" value="D">
              Descendente
            </option>
          </select>
        
          <label htmlFor="" style={{color:"white"}}>Orden por Peso:</label>
          <select style={{margin:"10px"}}  name="Peso"onChange={handleOrderW}>
            <option name="Orden" value="A">
              Ascendente
            </option>
            <option name="order" value="D">
              Descendente
            </option>
          </select>  <br></br>
          <label htmlFor="" style={{color:"white"}}>Temperamento:    </label>
          <select onChange={filtro} name="filter">
            <option value="All">Temperamento</option>
            <option value="All">All</option>
            <option value="Stubborn">Stubborn</option>
            <option value="Curious">Curious</option>
            <option value="Playful">Playful</option>
            <option value="Adventurous">Adventurous</option>
            
          </select>
          <label htmlFor="" style={{color:"white"}}>      Origen:</label>
          <select  onChange={filterOrigin} name="filter">
            <option value="All">Origen</option>
            <option value="All">All</option>
            <option value="Api">Dog-Api</option>
            <option value="DB">Base Dato</option>
        
            
          </select></div>

          <br></br>
        <div className="paginacion">
          <button className="button" disabled={adeshabilitado} onClick={rePag}>Back</button>
        <button className="button" disabled={deshabilitado} onClick={avPag}>Next</button></div>
        
            <div/>
           
          <div className="paginacion"> 
               <div className="cards-container">
        {dogShow.map((perro) => (
          <Card
          key={perro.id}
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
  