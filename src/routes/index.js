const { Router } = require('express');
const router = Router();

const sneakers = require('./sneakers');
const filterBrand = require('./filterBrand');
const insert = require('./postSneaker');
const sneaker = require('./getSneaker');
const users = require('./users');



// const axios = require("axios");
//const SneaksAPI = require('sneaks-api');
//const sneaks = new SneaksAPI();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.use('/sneakers', sneakers);
router.use('/brand', filterBrand);
router.use('/sneakers', insert);
router.use('/sneaker', sneaker);
router.use('/users', users); 




module.exports = router;
