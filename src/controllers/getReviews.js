const { Review } = require("../db");

const reviewId = async (id) => {
  console.log('BaReviewID_id:',id)
  const reviewId = await Review.findAll({where: {sneakerId: id}});
  console.log('BaReviewId:',reviewId)

  const sneakerID = {
    stars:reviewId.stars,
    text:reviewId.text,
    sneakerId:reviewId.id,
    userId:reviewId.userId
};
  console.log('BaSneakerID:',sneakerID);
  return sneakerID;
};
module.exports = { reviewId };
