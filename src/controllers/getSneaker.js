const { Sneakers, Review } = require("../db");



const sneakerId = async (id) => {
  const sneakerId = await Sneakers.findOne({ where: { id: id }, include: { model: Review } });
  return sneakerId

};
module.exports = { sneakerId };