import validate from '../Validation';
import validateTemp from '../ValidationTemp';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Form.css";
import { useSelector } from "react-redux";
import { NewDog } from '../Redux/Actions';
import { useDispatch } from 'react-redux';
import { AddAllDogs} from "../Redux/Actions.js";


export default function Form(props){


const navigate =useNavigate()
const AllTemps = useSelector((state) => state.temps);

const [nuevaPalabra, setNuevaPalabra] = useState('');
const [listaPalabras, setListaPalabras] = useState([]);
const [resultado, setResultado] = useState('');
const [newDog,SetNewDog] = useState({})
const [error,setErrors] = useState({})
const [tempError,setTempErrors] = useState({})
const [enviar,setEnviar] = useState(true)
const [addtemperamento,setTemperamento] = useState(true)
const dispatch = useDispatch();
   

var resultadoConcatenado = ""
const agregarPalabra = () => {
  if (nuevaPalabra.trim() !== '') {
    setListaPalabras(prevList => [...prevList, nuevaPalabra]);
    setNuevaPalabra('');
  }
};

const concatenarPalabras = () => {
   resultadoConcatenado = listaPalabras.join(', ');
    
   
    SetNewDog({...newDog,temperament:resultadoConcatenado});
  };
  useEffect(() => {
    concatenarPalabras();
  }, [listaPalabras]);

function HandleOnChange (e){
    const nombre = e.target.name;
        const valor = e.target.value;
 SetNewDog({...newDog,[nombre]: e.target.value});
 setErrors(validate({...newDog,[nombre]: e.target.value},AllTemps))
  
}

const NewWord = function(e){
 
  setTempErrors(validateTemp({...newDog,temperament: e.target.value},AllTemps))
  setNuevaPalabra(e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1).toLowerCase())
e.target.value=""
}

const handleSubmit = event => {
    event.preventDefault();

    console.log("Objeto de newDog:", JSON.stringify(newDog, null, 2));
    props.postNewDog(newDog);
    window.alert("Perro creado!")
    dispatch(AddAllDogs());

navigate("/home")
  }

  useEffect(() => {
 if (!tempError.temperament) setTemperamento(false);
  else setTemperamento(true)
  });
  useEffect(() => {
    if (!Object.keys(error).length) {
      setEnviar(false)} else setEnviar(true)})

     useEffect(() => {
      SetNewDog({...newDog,temperament:resultadoConcatenado});
console.log(NewDog)
         },[]);

return (<div class='ContainerAll' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}><h1 style={{}}>     Creador de Perros 🔬:</h1><div class='ContainerForm'>
<form class="form" onSubmit={handleSubmit}
>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>Nombre Raza : </label> <input style={{fontSize:"1em", borderColor:"grey"}} name="name" onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.name}</h1>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>    Altura Máxima: </label> <input style={{fontSize:"1em", borderColor:"grey"}} name="maxHeight"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.maxHeight}</h1>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>   Altura Mínimo: </label> <input style={{fontSize:"1em", borderColor:"grey"}} name="minHeight"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.minHeight}</h1>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>  Peso Máximo: </label> <input style={{fontSize:"1em", borderColor:"grey"}} name="weightMax"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.weightMax}</h1>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>   Peso Minimo: </label> <input style={{fontSize:"1em", borderColor:"grey"}} name="weightMin"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.weightMin}</h1>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>  url Imagen: </label> <input style={{fontSize:"1em", borderColor:"grey"}} name="reference_image_id"  onChange={HandleOnChange}></input>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>   Años de vida: </label> <input style={{fontSize:"1em", borderColor:"grey"}} name="spanLife"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.spanLife}</h1>
<label style={{ color: "black", fontSize: "1.5em", WebkitTextStroke: "0.12px white",fontWeight:"bold" }}>   Temperamentos: </label> 
<input
          type="text"
          name="temperament"
          value={nuevaPalabra}
          onChange={NewWord} 
          title={AllTemps.map(temp => temp).join(', ')}

        />
        <button disabled={addtemperamento} style={{marginTop:"10%"}}type="button"onClick={agregarPalabra}>Agregar Temperamento</button>
        <h1 style={{color:"red",fontSize:"1em"}}> {tempError.temperament}</h1>
<hr style={{margin:"15px"}}></hr>   
<h3 style={{color:"black",fontSize:"1em",margin:"auto"}} > Temperamentos Agregados:</h3>
        <ul style={{color:"White",fontSize:"1em"}}>
          {listaPalabras.map((palabra, index) => (
            <li style={{color:"White",fontSize:"1em"}} key="{index}">{palabra}</li>
          ))}
        </ul>

{/* <div>
        <button type="button" onClick={concatenarPalabras}>Concatenar Palabras</button>
      </div> */}

<br></br>


<button type="submit" disabled={enviar} style={{ margin: "5px" }}>Enviar</button>

</form>

</div></div>
)
// {/* <a1 style={{color:"red"}}>{error.email ? error.email: null} </a1>
// <a1 style={{color:"red"}}>{error.password ? error.password: null} </a1> */}
}