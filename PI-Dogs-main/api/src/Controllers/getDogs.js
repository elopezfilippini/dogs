const axios = require("axios");
const express = require('express');
const {Dog} = require("../db.js")


const getDogbyID = function (req,res) {
const id= req.params.id
   
        axios.get(`https://api.thedogapi.com/v1/breeds/${id}`).then(
           ({ data }) => {
             const personaje = {id : data.id,name: data.name,lifespan:data.lifespan,weight:data.weight,height:data.height,reference_image_id:data.reference_image_id}
             
             res.status(200).json(personaje)
            }
        )
        .catch(error => {
            console.error(error); // Agrega un registro de error en la consola
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          });
      };

   
              
      module.exports = getDogbyID;