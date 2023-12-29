const { Router } = require('express');
const getDogs = require('../Controllers/getDogs.js');
const getDogsbyQuery = require('../Controllers/getDogsbyQuery.js');
const postDog = require('../Controllers/postDogs.js');
const getTemperament = require('../Controllers/getTemperament.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/getDogs/:id",getDogs)
router.use("/getDogs",getDogsbyQuery)
router.use("/postDog",postDog)
router.use("/temperament",getTemperament)


module.exports = router;
