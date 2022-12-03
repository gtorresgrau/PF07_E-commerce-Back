const dataJSON = require('../DbJson/SneakerDb.json');
const { Sneakers } = require("../db");

const insertData = async () => {
  dataJSON.forEach(s => {
    Sneakers.findOrCreate({
      where: {title: s.title},
      defaults: {
        title: s.title,
        price: s.price,
        image: s.image,
        description: s.description,
        size: s.size,
        stock: s.stock,
        brand: s.brand, 
        genre: s.genre, 
        colour: s.colour,
        type: s.type
      }
    })
  })
  
}

module.exports = {
  insertData
}