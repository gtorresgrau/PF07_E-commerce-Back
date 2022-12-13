const { modeloDelCarrito } = require("../db");

const postSneakerCart = async ({title, price, image}) => {
    const [postSneaker] = await modeloDelCarrito.findOrCreate({
      where: {title: title},
      defaults: {
        title,
        price,
        image,
        amount:1
      }
    })
    return postSneaker;
}

module.exports = {
    postSneakerCart
}