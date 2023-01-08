const {Router}= require("express");

const router= Router();

const {User}= require("../db");

router.put("/", async(req,res)=>{
    try{
        const {fullName, isAdmin}= req.body;

        if(!fullName || !isAdmin){
            return res.status(400).json("You must complete this field before!")
        }

        const userToAdmin= await User.findAll({where:{fullName: fullName, isAdmin: isAdmin}});

        return res.status(200).json(userToAdmin);
        
    }catch(error){
        return res.status(404).json({error:error.message});
    }
})

module.exports= router;