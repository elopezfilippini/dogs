const axios = require("axios");
const express = require('express');
const {Dog} = require("../db.js")


      const getDogbyQuery = function (req,res) {
        const name= req.query.name
           
                axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`).then(
                   ({ data }) => {
                    const personajesFiltrados = data.map(element => ({
                      id: element.id,
                      name: element.name,
                      lifespan: element.lifespan,
                      weight: element.weight,
                      height: element.height,
                      reference_image_id: element.reference_image_id,
                  }));                      
                     
                     
                     res.status(200).json(personajesFiltrados)
                    }
                )
                .catch(error => {
                    console.error(error); // Agrega un registro de error en la consola
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Internal Server Error');
                  });
              };
              
      module.exports = getDogbyQuery;