const { Sneakers } = require("../db");

const insertSneaker = async ({title, price, image, description, size, stock, brand, genre, colour, type}) => {
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
        type
      }
    })
    return status;
}

module.exports = {
  insertSneaker
}