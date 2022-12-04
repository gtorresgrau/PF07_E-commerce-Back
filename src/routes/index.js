const { Router } = require('express');
const sneakers = require('./sneakers');
const users = require('./users');

const sneakerName= require("./sneakerName");

// const axios = require("axios");
//const SneaksAPI = require('sneaks-api');
//const sneaks = new SneaksAPI();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/sneakers', sneakers);
router.use('/users', users);
router.use("/sneakerName", sneakerName);

module.exports = router;
