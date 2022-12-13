const express = require('express');
const router = express.Router();
const { modeloDeCarrito } = require("../db");


router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteSneakers = await modeloDeCarrito.destroy({
      where: {
        id: +id
      }
    })
    if (!deleteSneakers) return res.status(404).send(`El id ${id} no corresponde a una zapa existente`);
    res.status(200).json(deleteSneakers);
  } catch (error) {
    console.log(error)
    res.status(404).send("Algo salio mal en el proceso")
  }
});