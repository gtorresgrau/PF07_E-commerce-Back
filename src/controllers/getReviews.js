const { Review } = require("../db");

const reviewId = async (id) => {
  console.log('Ba_ID_id:',id)
  const reviewById = await Review.findAll({where: {sneakerId: id}});
  const noReview = 'There are no reviews for this sneakers, be the first one';
  if(!reviewById.length) return noReview;
  return reviewById;
};

module.exports = { reviewId };
