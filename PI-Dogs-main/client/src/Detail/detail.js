import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import React from "react"
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";


export default function Detail(){
    const perros = useSelector((state) => state.dogs);
const [personaje,setCharacter] = useState({})
const {id} = useParams()
console.log("EL ID ES " + id)    
const perito= perros.find((perro)=> perro.id === Number(id))
console.log(perito)
useEffect(() => {
    setCharacter(perros.find((perro)=> perro.id === Number(id)))
 }, [id]);
 console.log(personaje)
 return (
    <div className="Tarjeta" style={{background: 'rgba(235, 235, 0, 0.8)    ', borderRadius:"30%", fontSize: "30px"}}> 
<br></br>

<h3 style={{fontFamily: 'Verdana', color:"Blue", marginBottom:"0.001px"}}>Detalle</h3>
 <h3 style={{fontFamily: 'Verdana', color:"magenta",marginBottom:"0.01px"}}>Nombre : {personaje.name}</h3>
 <h3 style={{fontFamily: 'Verdana', color:"magenta",marginBottom:"0.01px"}}>Temperamento : {personaje.temperament}</h3>
 <img className="dogimage" src={`https://cdn2.thedogapi.com/images/${personaje.reference_image_id}.jpg`}></img> 
 <br></br>
 


 



</div>)
}