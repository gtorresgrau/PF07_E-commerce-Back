const {Router}= require("express");
const router= Router();
const {User}= require("../db");

router.put("/", async(req,res)=>{
    try{
    const {fullName, isBanned}= req.body;
    if(!fullName|| !isBanned){
        return res.status(400).json("You must complete this field before!")
    }

        const userToBan= await User.findAll({where:{fullName: fullName, isBanned: isBanned}});


        return res.status(200).json(userToBan);
    }catch(error){
        return res.status(400).json({error: error.message});
    }
})

module.exports= router;