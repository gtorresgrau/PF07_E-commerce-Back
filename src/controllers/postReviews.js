const {Review} = require("../db");

const postReviews = async ({stars, text, sneakerId, userId}) => {
    const [reviewCreated, status] = await Review.create({
      where: {sneakerId: sneakerId},
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