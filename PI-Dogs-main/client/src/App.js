  import './App.css';
import {Route,Routes} from "react-router-dom"
import { useEffect } from 'react';
import Landing from "./Landing/landing.js";
import Detail from "./Detail/detail.js";
import Nav from "./Nav/Nav.js";
import About from "./About/about.js"
import axios from "axios"
import { useState } from 'react';
import Cards from "./Cards/cards.js";
import SearchBar from "./SearchBar/SearchBar.js";
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {AddDog, getTemps} from "./Redux/Actions.js"
import { AddAllDogs} from "./Redux/Actions.js";
import { NewDog} from "./Redux/Actions.js";
import Form from './FormPage/Form.js';

function App(prop) {
  const dispatch = useDispatch()
  const InitialState = []
  const [dogs,setDogs] = useState(()=>InitialState)
  
  
 
  const currentPage = useLocation()
  
  function onSearch(name) {
  dispatch(AddDog(name))
  }  

  function showAll() {
  dispatch(AddAllDogs())
    }  
function postNewDog(newdog){
  const postDog = {
    
    name: newdog.name,
    life_span:newdog.spanLife,
    weight:{metric:newdog.weightMin + " - "+ newdog.weightMax},
    height:{metric:newdog.minHeight + " - " + newdog.maxHeight },
    reference_image_id:newdog.reference_image_id,
    temperament:newdog.temperament}
console.log("EL PERRO QUE ENTREGA APP ES...")
    console.log(postDog)
    axios.post(`http://localhost:3001/postDog`, postDog,{ withCredentials: true })
    .then(({data}) =>{ console.log(data)
   
})}


// useEffect(() => {
//   dispatch(AddAllDogs())
//   dispatch(getTemps());
// })





  return (
    <div className="App">
    {currentPage.pathname !== "/" ?    <div name="bloque"><h1 class="titulo" style={{marginBottom:"1%"}}>🐾búsqueda de razas🐾</h1>
    <Nav onSearch={onSearch} showAll ={showAll}/></div>:null}
  
    

   
      <h1></h1>
      <Routes>
      <Route path ={"/about"} element = {<About/>}> </Route >
      
      <Route path ={"/home"} element = {<Cards dogs={dogs} />}></Route>
      <Route path = {"/"} element={<Landing/>}></Route>
      <Route path = {"/newDog"} element={<Form  postNewDog={postNewDog}/>}></Route>
      <Route path={"/detail/:name"} element={<Detail />}></Route>
      </Routes>
    </div>
    
    );
  }
  
  export default App;
  
  // {/* <SearchBar onSearch={onSearch} showAll ={showAll}/>  */}