const express = require('express');
const router = express.Router();
const { insertSneaker } = require('../controllers/postSneaker');

router.post('/', async (req, res) => {
  const { title, price, image, description, size, stock, brand, model, genre, colour, type } = req.body;
  if( !title || !size || !type ) return res.status(404).send('Missing required data');
  try {
    
    const sneakerCreated = await insertSneaker(req.body);
    console.log(sneakerCreated)
    if(sneakerCreated) res.status(200).send('Sneaker added successfully');
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
