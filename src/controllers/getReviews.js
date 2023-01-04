const { Review } = require("../db");

const reviewId = async (id) => {
  console.log('Ba_ID_id:',id)
  const reviewById = await Review.findAll({where: {sneakerId: id}});
  if(!reviewById.length) return 'There are no reviews for this sneakers, be the first one';
  return reviewById;
};

module.exports = { reviewId };
