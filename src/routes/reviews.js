const express = require('express');
const router = express.Router();
const { postReviews } = require('../controllers/postReviews.js');

router.post('/', async (req, res) => {
  console.log('reviewsB:',req.body);
  const { stars, text, sneakerId, userId} = req.body;
  if( !stars || !sneakerId || !userId ) return res.status(404).send('Missing required data');
  try {
        const reviewCreated = await postReviews({
            stars,
            text,
            sneakerId,
            userId
         });
        console.log('reviewCreate:',reviewCreated)
        if(reviewCreated) res.status(200).send('Review added successfully');
      }
    catch(error){
      console.error(error);
    }
});

module.exports = router;