import './App.css';
import {Route,Routes} from "react-router-dom"

import Landing from "./Landing/landing.js";
import Detail from "./Detail/detail.js";
import About from "./About/about.js"
import axios from "axios"
import { useState } from 'react';
import Cards from "./Cards/cards.js";
import SearchBar from "./SearchBar/SearchBar.js";
import { useLocation } from 'react-router-dom';



function App(prop) {
  const InitialState = []
  const [dogs,setDogs] = useState(()=>InitialState)
  const currentPage = useLocation()
  
  function onSearch(id) {
  axios.get(`http://localhost:3001/getDogs/${id}`)
  .then(({data}) =>{ if (data.id) return setDogs((dogviejos) => [...dogviejos, data])}).catch((error) => window.alert(error))}
  
function onClose(id){
const nuevoPerros = dogs.filter((perro)=> perro.id !==Number(id))
setDogs(nuevoPerros)
}


  return (
    <div className="App">
    {currentPage.pathname !== "/" ?    <div name="bloque"><h1 class="titulo">🐾búsqueda de razas🐾</h1>
    <hr class ="separator"></hr>
    <SearchBar onSearch={onSearch}/> </div>:null}

   
      <h1></h1>
      <Routes>
      <Route path ={"/about"} element = {<About/>}> </Route >
      <Route path ={"/detail"} element = {<Detail/>}></Route>
      <Route path ={"/home"} element = {<Cards dogs={dogs} onClose={onClose}/>}></Route>
      <Route path = {"/"} element={<Landing/>}></Route>
    
      </Routes>
    </div>
    
  );
}

export default App;
