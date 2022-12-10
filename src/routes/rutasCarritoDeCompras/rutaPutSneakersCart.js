const express = require('express');
const router = express.Router();
const { modeloDeCarrito } = require("../db");


router.put("/:id", async (req, res) => {
  const { sneakersId } = req.params;
  const {operation} = req.query;
  
  try {
    const sneakerCart = await modeloDeCarrito.findOne(
      { where: { id: +sneakersId } }
    )
    if(sneakerCart&&operation==='add'){
        sneakerCart.amount=sneakerCart.amount+1;
    


    }
    if(sneakerCart&&operation==='del'){
        if(sneakerCart>0){ sneakerCart.amount=sneakerCart.amount-1};
    }

    
    if (!sneaker) return res.status(404).send(`El id ${sneakersId} no corresponde`);
    res.status(200).json(sneakerCart);
  } catch (e) {
    console.log(e)
    res.status(404).send("Algo salio mal en el proceso")
  }
}); 


