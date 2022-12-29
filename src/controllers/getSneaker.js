const { Sneakers } = require("../db");



const sneakerId = async (id) => {
  const sneakerId = await Sneakers.findOne({where: {id: id}});

  const sneakerID = {
    id: sneakerId.id,
    title: sneakerId.title,
    price: sneakerId.price,
    image: sneakerId.image,
    description: sneakerId.description,
    size: sneakerId.size,
    stock: sneakerId.stock,
    brand:sneakerId.brand,
    model:sneakerId.model,
    genre:sneakerId.genre,
    colour:sneakerId.colour,
    type:sneakerId.type,
    rating:sneakerId.rating
};

  return sneakerID;
};
module.exports = { sneakerId };
