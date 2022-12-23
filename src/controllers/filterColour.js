const { Sneakers } = require("../db");
const {Op} = require('sequelize');

const colourFilter = async (filtro) => {     
  
    const colourFil = await Sneakers.findAll({
      where: {
        colour:{ [Op.iLike]: `%${filtro}%` }
    }
  });

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
    
    module.exports =  {colourFilter};
    