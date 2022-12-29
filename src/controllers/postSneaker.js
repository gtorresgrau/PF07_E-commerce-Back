const { Sneakers } = require("../db");

const insertSneaker = async ({title, price, image, description, size, stock, brand, genre, colour, type, rating}) => {
    const [sneakerCreated, status] = await Sneakers.findOrCreate({
      where: {title: title},
      defaults: {
        title,
        price,
        image,
        description,
        size,
        stock,
        brand, 
        genre, 
        colour,
        type,
        rating
      }
    })
    return status;
}

module.exports = {
  insertSneaker
}