const axios = require("axios");
const express = require('express');
const {Temperament} = require("../db.js")
var listaTemperamentos=[]

const filtradorTemperamentos = function(dogtemp){
    
    for (let i=0; i< dogtemp.length;i++){
        var palabra = listaTemperamentos.find((palabra)=> palabra===dogtemp[i]);
        // if (palabra) arraydef.push(cachu[i]) 
        if (!palabra) listaTemperamentos.push(dogtemp[i])}
    
}
const getTemperament = function (req,res) {
const id= req.params.id

   
        axios.get(`https://api.thedogapi.com/v1/breeds/`).then(
            ({ data }) => {
                data.forEach(perro => {
                    if (perro.temperament) {
                        filtradorTemperamentos(perro.temperament.split(","));
                    }
                });

                for (let i = 0; i < listaTemperamentos.length; i++) {
                    listaTemperamentos[i] = listaTemperamentos[i].replace(/^['"](.*)['"]$/g, '$1');
                     Temperament.create({
                        name:listaTemperamentos[i]
                    })
                  }
                res.status(200).json(listaTemperamentos);
                
             
            })
        .catch(error => {
            console.error(error); // Agrega un registro de error en la consola
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          });
      };

   
              
      module.exports = getTemperament;