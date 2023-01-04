const { Review } = require("../db");

const reviewId = async (id) => {
  console.log('Ba_ID_id:',id)
  const reviewId = await Review.findAll({where: {sneakerId: id}});
  console.log('BaReviewId:',reviewId)
    if(reviewId.length){
      const sneakerID = {
        stars:reviewId.stars,
        text:reviewId.text,
        sneakerId:reviewId.id,
        userId:reviewId.userId
      };
    }else{
      reviewId = 'There are no reviews for this sneakers';
    }
    console.log('BaSneakerID:',sneakerID);
    return sneakerID;
    
};
module.exports = { reviewId };
