const { Router } = require('express');
const router = Router();

const sneakers = require('./sneakers');
const filterBrand = require('./filterBrand');
const insert = require('./postSneaker');
const sneaker = require('./getSneaker');
const users = require('./users');
const filter = require('./filterAnidado');
const user= require("./getUserID");


const sneakerName= require("./sneakerName");


// const axios = require("axios");
//const SneaksAPI = require('sneaks-api');
//const sneaks = new SneaksAPI();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


router.use('/sneakers', sneakers);


router.use("/sneakerName", sneakerName);

router.use('/brand', filterBrand);
router.use('/sneakers', insert);
router.use('/sneaker', sneaker);
router.use('/users', users); 
router.use("/filter", filter);

router.use("/user", user);


module.exports = router;
