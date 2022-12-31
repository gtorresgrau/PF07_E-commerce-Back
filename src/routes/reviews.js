const express = require('express');
const router = express.Router();
const { postReviews } = require('../controllers/postReviews.js');

router.post('/', async (req, res) => {
  const { stars, text, sneakerId, userId} = req.body;
  if( !stars || !text || !sneakerId || !userId ) return res.status(404).send('Missing required data');
  try {
    if(stars){
        const reviewCreated = await postReviews({
            stars,
            text,
            sneakerId,
            userId
         });
        console.log(reviewCreated)
        if(reviewCreated) res.status(200).send('Review added successfully');
      }
    }catch(error){
      console.log(error)
    }
});

module.exports = router;