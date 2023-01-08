const {Router}= require("express");

const router= Router();

const {User}= require("../db");

router.put("/users/:id/isBanned", async(req,res)=>{
    
    const id = req.params.id;
    const {fullName, isBanned}= req.body;
    
    try{
        if (!id || !fullName || isBanned === undefined) {
            return res.status(400).json("You must complete this field before!");
          }

        
        const userToBan= await User.update({ isBanned }, { where: { id } })
    .then(() =>  res.status(200).json(userToBan));

        
        
    }catch(error){
        return res.status(404).json({error:error.message});
    }
})

module.exports= router;