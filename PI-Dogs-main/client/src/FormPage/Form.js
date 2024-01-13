import validate from '../Validation';
import validateTemp from '../ValidationTemp';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./Form.css";
import { useSelector } from "react-redux";

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

const agregarPalabra = () => {
    if (nuevaPalabra.trim() !== '') {
      setListaPalabras([...listaPalabras, nuevaPalabra]);
      setNuevaPalabra('');
  setTemperamento(true)
  concatenarPalabras()

    }
  };
  const concatenarPalabras = () => {
    const resultadoConcatenado = listaPalabras.join(', ');
    setResultado(resultadoConcatenado);
  };
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
  }

  useEffect(() => {
 if (!tempError.temperament) setTemperamento(false);
  else setTemperamento(true)
  });
  useEffect(() => {
    if (!Object.keys(error).length) {
      setEnviar(false)} else setEnviar(true)})
     useEffect(() => {
      console.log(error)
         });

return (<div class='ContainerForm'>
<form class="form" onSubmit={handleSubmit}
>
<label style={{color:"White",fontSize:"1em"}}>Nombre Raza : </label> <input style={{fontSize:"1em"}} name="name" onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.name}</h1>
<label style={{color:"White",fontSize:"1em"}} >    Altura Máxima: </label> <input name="maxHeight"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.maxHeight}</h1>
<label style={{color:"White",fontSize:"1em"}} >    Altura Mínimo: </label> <input name="minHeight"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.minHeight}</h1>
<label style={{color:"White",fontSize:"1em"}} >    Peso Máximo: </label> <input name="weightMax"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.weightMax}</h1>
<label style={{color:"White",fontSize:"1em"}} >    Peso Minimo: </label> <input name="weightMin"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.weightMin}</h1>
<label style={{color:"White",fontSize:"1em"}} >    url Imagen: </label> <input name="reference_image_id"  onChange={HandleOnChange}></input>
<label style={{color:"White",fontSize:"1em"}} >    Años de vida: </label> <input name="spanLife"  onChange={HandleOnChange}></input>
<h1 style={{color:"red",fontSize:"1em"}}> {error.spanLife}</h1>
        <label style={{color:"White",fontSize:"1em"}} >    Temperamentos: </label> 
<input
          type="text"
          name="temperament"
          value={nuevaPalabra}
          onChange={NewWord} 
          title={AllTemps.map(temp => temp.name).join(', ')}

        />
        <button disabled={addtemperamento} type="button"onClick={agregarPalabra}>Agregar Temperamento</button>
        <h1 style={{color:"red",fontSize:"1em"}}> {tempError.temperament}</h1>
<hr style={{margin:"15px"}}></hr>   
<h3 style={{color:"White",fontSize:"1em"}} > Temperamentos Agregados:</h3>
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

</div>
)
// {/* <a1 style={{color:"red"}}>{error.email ? error.email: null} </a1>
// <a1 style={{color:"red"}}>{error.password ? error.password: null} </a1> */}
}