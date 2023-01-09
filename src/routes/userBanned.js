const { Router } = require("express");

const router = Router();

const { User } = require("../db");

router.put("/:id", async (req, res) => {

  const id = req.params.id;
  const { isBanned } = req.body

  try {
    if (isBanned === true) {
      const deleteBand = await User.update({ isBanned: true }, { where: { id: id } })
      res.status(200).json(deleteBand);
    } else {
      const isBannedd = await User.update({ isBanned: false }, { where: { id: id } })
      res.status(200).json(isBannedd);
    }

  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
})

module.exports = router;