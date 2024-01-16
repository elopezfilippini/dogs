import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import React from "react"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import "./detail.css"


export default function Detail(){
    const perros = useSelector((state) => state.dogs);
const [personaje,setCharacter] = useState({})
const {name} = useParams()
console.log("EL ID ES " + name)    
const perito= perros.find((perro)=> perro.name === name)
console.log("perito es...")
console.log(perito)
useEffect(() => {
    if (perito) {
      setCharacter(perito);
    }
  }, [perito, name]);
 console.log("personaje  es...")
 console.log(personaje)
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
 


 



</div>)
}