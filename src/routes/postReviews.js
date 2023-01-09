const express = require('express');
const router = express.Router();
const {Sneakers, Review} = require('../db.js');

router.post('/', async (req, res) => {
  console.log('BA_post_reviewsBody:',req.body);
  const { stars, text, sneakerId, userId} = req.body;
  if( !stars || !sneakerId || !userId ) return res.status(404).send('Missing required data');
  try {
        const reviewCreated = Review.findOrCreate({
          where: {sneakerId: sneakerId, userId: userId},
          defaults: {
            sneakerId,
            userId,
            text,
            stars,
          }
        });
        const sneackerdb = await Sneakers.findAll({
          where: { id: sneakerId}      
        });
          console.log('reviewCreate:',reviewCreated)
          if(sneackerdb) {
            await reviewCreated.addReview(sneackerdb)
            res.status(200).send('Review added successfully');
          }
        }catch(error){
          console.error(error);
        }
    })

module.exports = router;