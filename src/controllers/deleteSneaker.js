const { Sneakers } = require("../db");



const deletingSneaker = async (id) => {
  const deleting = await Sneakers.destroy({where: {id: id}});
    return console.log('The sneaker was successfully deleted')
};

module.exports={deletingSneaker};