
import SearchBar from "../SearchBar/SearchBar.js";
import { useLocation } from 'react-router-dom';
import "./Nav.css"
import React from "react";

import {Link} from  "react-router-dom"

export default function Nav(props) {
    const currentPage = useLocation()
    return (  <div class="ContenedorPPal">  <div class="navegador">    
        <Link to={'/home'}><button style={{ margin: "0 auto" }} className="buttonContainer button">Home</button></Link>
        <Link to={'/about'}><button style={{ margin: "0 auto" }} className="buttonContainer button" >About</button></Link>
        <Link to={'/NewDog'}><button style={{ margin: "0 auto" }} className="buttonContainer button" >Crear</button></Link></div>
        <hr />
         {currentPage.pathname === "/home" ?    <div class="contenedorSearch" >   <SearchBar onSearch={props.onSearch} showAll ={props.showAll} /></div>:null}
        <div className="Nav" style={{ display: "block", justifyContent: "flex-end", width: "330px", margin: "0 auto" }}>
         
       
        </div>
     </div>
    )
}