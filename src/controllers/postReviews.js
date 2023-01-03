const {Review} = require("../db");

const postReviews = async ({stars, text, sneakerId, userId}) => {
  console.log('postReviewB:',stars,text, sneakerId, userId);
    const [status] = await Review.findOrCreate({
      where: {sneakerId: sneakerId, userId: userId},
      defaults: {
        sneakerId,
        userId,
        text,
        stars,
      }
    })
    return status;
}

module.exports = { postReviews };