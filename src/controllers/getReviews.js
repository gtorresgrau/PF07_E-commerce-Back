const { Review } = require("../db");

const sneakerReviews = async (id) => {
  const allReviews= await Review.findall({where: {sneakerId: sneakerId}});

  const sneakerID = {
    stars:sneakerId.stars,
    text:sneakerId.text,
    sneakerId:sneakerId.sneakerId,
    userId:sneakerId.userId
};
  return allReviews;
};
module.exports = { allReviews };
