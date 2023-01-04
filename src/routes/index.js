const { Router } = require('express');
const router = Router();

const sneakers = require('./sneakers');
const insert = require('./postSneaker');
const sneaker = require('./getSneaker');
const rawusers = require('./rawUsers');
const filter = require('./filterAnidado');
const user = require("./getUserID");
const reviews = require('./reviews');

const userLoggued= require("./userLoggued");
const sneakerName= require("./sneakerName");
const postUser= require("./postUsers");
const upload =require('./upload');
const pagoo =require('./linkPagoMP');

// const axios = require("axios");
//const SneaksAPI = require('sneaks-api');
//const sneaks = new SneaksAPI();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use("/userloggued", userLoggued);
router.use('/sneakers', sneakers);
router.use("/postuser", postUser);
router.use("/sneakerName", sneakerName);
router.use('/sneakers', insert);
router.use('/sneaker', sneaker);
router.use('/rawusers', rawusers); 
router.use("/filter", filter);
router.use("/user", user);
router.use('/upload', upload);
router.use('/payment', pagoo);
router.use('/reviews', reviews);


module.exports = router;
