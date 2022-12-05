const { Sneakers } = require("../db");

const colourFilter = async (filtro) => {     
  
    const colourFil = await Sneakers.findAll({where: {colour:filtro}})
       
    const colourF = colourFil.map(filter => {
      return {
        id: filter.id,
        title: filter.title,
        image:filter.image,
        price:filter.price,
        description: filter.description,
        size: filter.size,
        stock: filter.stock,
        brand:filter.brand,
        model:filter.model,
        genre:filter.genre,
        colour:filter.colour,
        type:filter.type
          }})
        
    return colourF;
    };
    module.exports = { colourFilter };
    