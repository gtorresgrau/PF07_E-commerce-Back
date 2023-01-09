const { Router } = require("express");

const router = Router();

const { Sneakers } = require("../db");


router.put("/:id", async (req, res) => {

  const { title, price, image, description, size, stock, brand, genre, colour, type } = req.body;
  const { id } = req.params;
  try {
    if (!title || !price || !image || !description || !size || !stock || !brand || !genre || !colour || !type) {
      return res.status(400).json("You must complete this field before!");
    } else {
      const sneakModified = await Sneakers.update({ title: title, price: price, image: image, description: description, size: size, stock: stock, brand: brand, genre: genre, colour: colour, type: type }, { where: { id: id } });
      return res.status(200).json(sneakModified);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
})

module.exports = router;