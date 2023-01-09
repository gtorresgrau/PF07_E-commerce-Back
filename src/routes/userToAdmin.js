const { Router } = require("express");

const router = Router();

const { User } = require("../db");

router.put("/:id", async (req, res) => {

  const id = req.params.id;
  const { isAdmin } = req.body

  try {
    if (isAdmin === true) {
      const deleteAdmin = await User.update({ isAdmin: true }, { where: { id: id } })
      res.status(200).json(deleteAdmin);
    } else {
      const userToAdmin = await User.update({ isAdmin: false }, { where: { id: id } })
      res.status(200).json(userToAdmin);
    }

  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
})

module.exports = router;