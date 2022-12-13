const { Sneakers } = require("../db");

const brandFilter = async (filtro) => {     
  
    const brandFil = await Sneakers.findAll({where: {brand:filtro}})
    return brandFil;
};
const genreFilter = async (filtro) => {     
  
    const genreFil = await Sneakers.findAll({where: {genre:filtro}})
    return genreFil;
};
const colourFilter = async (filtro) => {     
  
    const colourFil = await Sneakers.findAll({where: {colour:filtro}})
    return colourFil;
};
const typeFilter = async (filtro) => {     
  
    const typeFil = await Sneakers.findAll({where: {type:filtro}})
    return typeFil;
};
module.exports = { brandFilter, colourFilter, typeFilter, genreFilter };
