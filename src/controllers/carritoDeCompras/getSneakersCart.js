const { modeloDeCarrito } = require("../db");

const GetAllSneakersCart = async () => {
  const sneakersCart = await modeloDeCarrito.findAll();
  const allSneakersCart = sneakersCart.map(el => {
    return {
      id: el.id,
      title: el.title,
      price: el.price,
      image: el.image,
      amount: el.amount
    }
  });
  return allSneakersCart;
}

module.exports = {
    GetAllSneakersCart
}

//modelo de carrito o local storage modificar