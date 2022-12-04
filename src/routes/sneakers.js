const express = require('express');
const router = express.Router();
const { allSneakersDB } = require('../controllers/getAllDB');


router.get('/', async (req, res) => {
  const sneakers = await allSneakersDB();
  sneakers.length ? res.status(200).json(sneakers) : res.status(404).send('No hay Sneakers'); 
});

module.exports = router;