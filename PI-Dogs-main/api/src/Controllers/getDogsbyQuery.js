const axios = require("axios");
const express = require('express');
const { Dog } = require("../db.js");

const getDogbyQuery = async function (req, res) {
  const name = req.query.name;

  try {
    const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    const personajesFiltrados = data.map(element => ({
      id: parseInt(element.id, 10),
      name: element.name,
      lifespan: element.lifespan,
      weight: element.weight,
      height: element.height,
      reference_image_id: element.reference_image_id,
      Origin:"Api"
    }));


    
    const dogsCreated = await Dog.findAll({ where: { name: name } });
   const PersonajesEncontrados = [...personajesFiltrados,...dogsCreated]
   res.status(200).json(PersonajesEncontrados);   
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = getDogbyQuery;