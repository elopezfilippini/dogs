const { Router } = require('express');
const getDogs = require('../Controllers/getDogs.js');
const getDogsbyQuery = require('../Controllers/getDogsbyQuery.js');
const postDog = require('../Controllers/postDogs.js');
const getTemperament = require('../Controllers/getTemperament.js');
const getTemp = require('../Controllers/getTemp.js');
const getDogsbyID = require('../Controllers/getDogsbyID.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
// router.use("/getDogs/:id",getDogs)
router.use("/getAllDogs/",getDogs)
router.use("/getDogs",getDogsbyQuery)
router.use("/postDog",postDog)
router.use("/temperament",getTemperament)
router.use("/getTemps",getTemp)
router.use("/getDogsbyID/:id",getDogsbyID)

// router.post('/postDog', postDog
//   );


module.exports = router;
