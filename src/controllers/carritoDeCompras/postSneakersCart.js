const { Cart } = require("../db");

const postSneakerCart = async ({title, price, image}) => {
    const [postSneaker] = await Cart.findOrCreate({
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
