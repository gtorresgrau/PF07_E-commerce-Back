const { Router } = require("express");
const router = Router();
const { allUsers, userById } = require("../controllers/getUsers");

router.get("/", async (req, res) => {
  
    const allUsersBD = await allUsers();
    allUsersBD.length ?
    res.status(200).json(allUsersBD) 
    :
    res.status(404).send("No hay usuarios");
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if(id) {
    const userFound = await userById(id);
    if(!userFound) return res.status(404).send('Usuario no encontrado');
    res.status(200).json(userFound); 
  }
});

module.exports = router;