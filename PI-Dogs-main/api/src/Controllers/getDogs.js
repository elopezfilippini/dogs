const axios = require("axios");
const express = require('express');
const { Dog } = require("../db.js");
const API_KEY = process.env.API_KEY;

const getDogbyID = async function (req, res) {
  try {
    const { id } = req.params;

    if (id) {
      const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/${id}`);
      const personaje = {
        id: data.id,
        name: data.name,
        life_span: data.life_span,
        weight: data.weight,
        height: data.height,
        reference_image_id: data.reference_image_id,
        Origin: "Api"
      };
      return res.status(200).json(personaje);
    } else {
      const { data } = await axios.get(`https://api.thedogapi.com/v1/breeds/?api_key=${API_KEY}`);
      let personajesFiltrados = data.map(element => ({
        id: parseInt(element.id, 10),
        name: element.name,
        life_span: element.life_span,
        weight: element.weight,
        weightMax: element.weight.metric ? element.weight.metric.split("- ")[1] : [],
        height: element.height,
        temperament: element.temperament,
        temperamentlist: element.temperament ? element.temperament.split(",") : [],
        reference_image_id: `https://cdn2.thedogapi.com/images/`+element.reference_image_id+`.jpg`,
        Origin: "Api"
      }));

      // Assuming Dog is a Sequelize model, you can fetch dogs from the database like this:
      const dogsCreated = await Dog.findAll();
    ;
    const todolosPerros = [...personajesFiltrados, ...dogsCreated];

      return res.status(200).json(todolosPerros);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
};

module.exports = getDogbyID;
