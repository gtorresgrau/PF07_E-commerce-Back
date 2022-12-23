const { Sneakers } = require("../db");
const {Op} = require('sequelize');

const brandFilter = async (filtro) => {     
    const brandFil = await Sneakers.findAll({
        where: {
            brand:{ [Op.iLike]: `%${filtro}%` }
        }
    })
    return brandFil;
};

const genreFilter = async (filtro) => {     
    const genreFil = await Sneakers.findAll({
        where: {
            genre:{ [Op.iLike]: `%${filtro}%` }
        }
    })
    return genreFil;
};

const colourFilter = async (filtro) => {     
    const colourFil = await Sneakers.findAll({
        where: {
            colour:{ [Op.iLike]: `%${filtro}%` }
        }
    })
    return colourFil;
};

const typeFilter = async (filtro) => {     
    const typeFil = await Sneakers.findAll({
        where: {
            type:{ [Op.iLike]: `%${filtro}%` }
        }
    })
    return typeFil;
};

module.exports = { 
    brandFilter,
    colourFilter,
    typeFilter,
    genreFilter
 };
