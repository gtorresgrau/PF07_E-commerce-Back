const { Sneakers } = require("../db");

const brandFilter = async (filtro) => {     
  
    const brandFil = await Sneakers.findAll({where: {colour:filtro}})
       
    const brandF = brandFil.map(filter => {
      return {
        id: filter.id,
        title: filter.title,
        price: filter.image,
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
    module.exports = { brandFilter };
    

    
 
    
    

  
   

