const {Dog} = require("../db.js")


const postDog = async (req,res)=>  {
try {
const {id,name,lifespan,weight,height,reference_image_id} =req.body
if (!id ||!name||!lifespan||!weight||!height||!reference_image_id) res.status(400).send("Faltan ingresar datos")
else { 
    const newDog = await Dog.create({
    id: id,
    name: name,
    lifespan:lifespan,
    weight:weight,
    height:height,
    reference_image_id:reference_image_id
}); return res.status(200).json(newDog)

}
}
catch(error) { res.status(500).send(error.message)}
}



module.exports = postDog;