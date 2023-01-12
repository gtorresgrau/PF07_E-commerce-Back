const { Router } = require("express");

const router = Router();

const { User } = require("../db");


router.put("/:id", async (req, res) => {

  const { userName, fullName, image, email, shippingAddress, country, city, phoneNumber} = req.body;
  console.log('req.body',req.body)
  const { id } = req.params;
  try {
    if (!userName || !fullName || !image || !email || !shippingAddress || !country || !city || !phoneNumber ) {
      return res.status(400).json("You must complete this field before!");
    } else {
      const userModified = await User.update({userName, fullName, image, email, shippingAddress, country, city, phoneNumber}, { where: { email: email } });
      return res.status(200).json(userModified);
    }
  } catch (error) {
    /* return res.status(404).json({ error: error.message }); */
    console.log('error de putuser',error)
  }
})

module.exports = router;