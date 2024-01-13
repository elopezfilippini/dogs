const {Temperament} = require("../db.js")

const getTemp = async(req,res) =>{
    try{

    const allTemps = await Temperament.findAll();
    res.status(200).json(allTemps)
   } 
catch (error) {
        return res.status(500).send(error.message)}
}



module.exports = getTemp