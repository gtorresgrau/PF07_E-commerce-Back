const { Sneakers } = require("../db");
const {Op} = require('sequelize');

const brandFilter = async (filtro) => {     
  
    const brandFil = await Sneakers.findAll({
      where: {
        brand:{ [Op.iLike]: `%${filtro}%` }
      }
    });
       
    const brandF = brandFil.map(filter => {
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
        
    return brandF;
    };
    
    module.exports = {brandFilter};
    

    
 
    
    

  
   

