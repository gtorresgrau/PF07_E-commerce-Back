const { Router } = require("express");
const { getUserById} = require("../handlers");
const {
  getRole
} = require("../handlers/routeProtection");

const router = Router();

router.get("/:id", getRole, async(req,res)=>{
    const {id}= req.params;
    role= req.role;
    try{
        const user= await getUserById(id);
        if(role === "admin"){
            return res.json(user);
        }
        return res.json({
            fullName: user.fullName,
            image: user.image,
            sneakerOwner: user.sneakerOwner
        });

    }catch(error){
        return res.status(404).json(error.message);
    }
})

module.exports= router;
