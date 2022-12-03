const { Sneakers } = require("../db");
const { insertData } = require("./insertDataDB");

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
      model: el.model,
      genre: el.genre, 
      colour: el.colour,
      type: el.type
    }
  });
  return allSneakers;
}

module.exports = {
  allSneakersDB
}