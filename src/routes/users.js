const { Router } = require("express");
const {GetAllUsers} = require("../handlers/index");
const {
  getRole
} = require("../handlers/routeProtection");

const router= Router();

router
  .get("/", getRole, async (req, res) => {
    try {
      if(req.role !== 'admin') throw Error('You are not an Admin')
      const usersDb = await GetAllUsers();
      res.json(usersDb);
    } catch (error) {
      res.status(400).json(error);
    }
  })


module.exports = router;