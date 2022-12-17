const express = require('express');
const router = express.Router();
const { insertSneaker } = require('../controllers/postSneaker');
const cloudinary = require('../utils/Cloudinary');

router.post('/', async (req, res) => {
  const { title, price, image, description, size, stock, brand, model, genre, colour, type } = req.body;
  if( !title || !size || !type ) return res.status(404).send('Missing required data');
  try {
    if(image){
      const uploadRes = await cloudinary.uploader.upload(image,{
        upload_preset:'HenrySneaker'
      })
      if(uploadRes){
        const sneakerCreated = await insertSneaker({
          title, 
          price, 
          image:uploadRes, 
          description, 
          size, 
          stock, 
          brand, 
          model, 
          genre, 
          colour, 
          type
         });
        console.log(sneakerCreated)
        if(sneakerCreated) res.status(200).send('Sneaker added successfully');
      }
    }
    
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
