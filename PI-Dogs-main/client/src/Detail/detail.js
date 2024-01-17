import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import React from "react"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./detail.css"
import { useNavigate } from "react-router-dom";


export default function Detail(){
    const perros = useSelector((state) => state.dogs);
    const navigate = useNavigate()
const [personaje,setCharacter] = useState({})
const {name} = useParams()
console.log("EL ID ES " + name)    
const perito= perros.find((perro)=> perro.name === name)

const [mostrarBoton, setMostrarBoton] = useState("");

useEffect(() => {
    if (perito) {
      setCharacter(perito);
    }
  }, [perito, name]);

 useEffect(() => {
  if (personaje.Origin === "DB") {
    setMostrarBoton("DB");
  } else {
    setMostrarBoton("");
  }
}, [personaje]);

const del  = () => {
  axios.get(`http://localhost:3001/deleteDog/${personaje.id}`)
.then(({data}) =>{ window.alert("personaje borrado " + data)
navigate("/")});}






 
 return (
    <div className="tarjetadetail"> 
    
<br></br>
<img class="otherimages" src={"   https://i.ibb.co/CtVpBdB/pngegg.png"
}></img>
 <h3 class="datos" style={{fontFamily: 'Verdana', marginTop: "-5%" ,color:"RED",fontSize:"288%",marginBottom:"0.01px"}}> {personaje.name}</h3>
 <h3 class="datos" style={{fontFamily: 'Verdana', color:"brown",marginBottom:"0.01px"}}>Peso (kgs) : {personaje.weight?.metric}</h3>
 <h3 class="datos" style={{fontFamily: 'Verdana', color:"brown",marginBottom:"0.01px"}}>Altura (cm) : {personaje.height?.metric}</h3>
 <h3 class="datos" style={{fontFamily: 'Verdana', color:"brown",marginBottom:"0.01px"}}>Expectativa de vida : {personaje.life_span}</h3>
 <h3 class="datos" style={{fontFamily: 'Verdana', color:"brown",marginBottom:"0.01px"}}>Temperamentos : {personaje.temperament}</h3>
 <img class="dogimages" src={`${personaje.reference_image_id
}`}></img> 
 <br></br>
 <br></br>
 <br></br>
 {mostrarBoton && <button style ={{color:"red"}} onClick={del}>Eliminar</button>}

 {}
 


 



</div>)
}