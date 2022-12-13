const express = require('express');
const router = express.Router();
const { GetAllSneakersCart } = require('../controllers');

//completar de donde se requiere el controller

router.get('/', async (req, res) => {
    const getSneakerscart = await GetAllSneakersCart();
    getSneakerscart.length ? res.status(200).json(getSneakerscart) : res.status(404).send('No hay Sneakers en el carrito'); 
  })

  

module.exports = router;