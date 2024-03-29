const { Router } = require('express');
const router = Router();

const sneakers = require('./sneakers');
const insert = require('./postSneaker');
const sneaker = require('./getSneaker');
const rawusers = require('./rawUsers');
const filter = require('./filterAnidado');
const getUser = require("./getUserID");
const getOrdes = require("./getOrders");
const putOrder = require("./putOrder")


const sneakerUpdate = require("./sneakerUpdate");
const userToAdmin = require("./userToAdmin");


const postReviews = require('./postReviews');
const getReviews = require('./getReviews');
const userBanned = require("./userBanned");
const userLoggued = require("./userLoggued");
const sneakerName = require("./sneakerName");
const postUser = require("./postUsers");
const upload = require('./upload');
const pagoo = require('./linkPagoMP');
const notificar = require('./notificar');
const emailOrder = require('./sendEmailOrders');
const userUpdate = require('./userUpdate');
const deleting = require('./deleteSneaker');
const response = require('./response');


// const axios = require("axios");
//const SneaksAPI = require('sneaks-api');
//const sneaks = new SneaksAPI();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

router.use("/userloggued", userLoggued);
router.use('/sneakers', sneakers);
router.use("/postuser", postUser);
router.use("/user", getUser);
router.use("/sneakerName", sneakerName);
router.use('/sneakers', insert);
router.use('/sneaker', sneaker);
router.use('/userUpdate', userUpdate);


router.use('/updateOrder', putOrder);
router.use('/rawusers', rawusers);
router.use("/orders", getOrdes);
router.use("/filter", filter);
router.use('/upload', upload);
router.use('/payment', pagoo);
router.use("/userbanned", userBanned);

router.use("/useradmin", userToAdmin);
router.use("/sneakerupdate", sneakerUpdate);

router.use('/reviews', postReviews);
router.use('/reviews', getReviews);
router.use('/notificar', notificar);
router.use('/sendEmailOrder', emailOrder);
router.use('/deleting', deleting);
router.use('/response', response);


module.exports = router;
