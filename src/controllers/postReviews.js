// const {Review, Sneakers} = require("../db");

// const postReviews = async ({stars, text, sneakerId, userId}) => {
//   console.log('postReviewB:',stars,text, sneakerId, userId);
//   try{
//     const [status] = await Review.findOrCreate({
//       where: {sneakerId: sneakerId, userId: userId},
//       defaults: {
//         sneakerId,
//         userId,
//         text,
//         stars,
//       }

//     });
//     const sneackerdb = await Sneakers.findAll({
//       where: { id: sneakerId}      
//     });
//       console.log('reviewCreate:',status)
//       if(sneackerdb) {
//         await status.addReview(sneackerdb)
//         res.status(200).send('Review added successfully');
//       }
//     }catch(error){
//       console.error(error);
//     }
// }

// module.exports = { postReviews };