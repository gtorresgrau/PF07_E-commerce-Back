const express = require('express');
const router = express.Router();
const { postSneakerCart } = require('../controllers/postSneaker');

router.post('/', async (req, res) => {
  const { title, price, image} = req.body;
  
  try {
    
    const postSneakers = await postSneakerCart(req.body);
    if(postSneakers) res.status(200).send('Sneaker agregado al carrito');
  
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
