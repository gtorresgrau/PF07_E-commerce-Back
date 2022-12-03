const { Router } = require('express');
const sneakers = require('./sneakers');
const sneaker = require('./getSneaker');
const users = require('./users');

// const axios = require("axios");
//const SneaksAPI = require('sneaks-api');
//const sneaks = new SneaksAPI();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/sneakers', sneakers);
router.use('/sneaker', sneaker);
router.use('/users', users);


module.exports = router;
