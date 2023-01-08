const { Sneakers } = require("../db");

const allSneakersDB = async () => {
  const sneakersDb = await Sneakers.findAll();
  const allSneakers = sneakersDb.map(el => {
    return {
      id: el.id,
      title: el.title,
      price: el.price,
      image: el.image,
      description: el.description,
      size: el.size,
      stock: el.stock,
      brand: el.brand, 
      genre: el.genre, 
      colour: el.colour,
      type: el.type,
     
    }
  });
  return allSneakers;
}

module.exports = {
  allSneakersDB
}