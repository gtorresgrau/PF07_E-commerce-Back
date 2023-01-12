const express = require('express');
const router = express.Router();
const { Sneakers, Review } = require('../db.js');

router.post('/', async (req, res) => {
  console.log('BA_post_reviewsBody:', req.body);
  const { stars, text, sneakerId, userId } = req.body;
  if (!stars || !sneakerId || !userId) return res.status(404).send('Missing required data');
  try {
    const [reviewCreated] = await Review.findOrCreate({
      where: { sneakerId: sneakerId, userId: userId },
      defaults: {
        userId,
        text,
        stars,
      }
    });
    const sneackerdb = await Sneakers.findAll({ //findOne
      where: { id: sneakerId }
    });
    console.log('reviewCreate:', sneackerdb)
    if (sneackerdb) {
      await sneackerdb[0].addReview(reviewCreated)
      res.status(200).send('Review added successfully');
    }
  } catch (error) {
    console.error(error);
  }
})

module.exports = router;