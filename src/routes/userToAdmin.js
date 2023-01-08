const {Router}= require("express");

const router= Router();

const {User}= require("../db");

router.put("/users/:id/isAdmin", async(req,res)=>{
    
    const id = req.params.id;
    const {fullName, isAdmin}= req.body;
    
    try{
        if (!id || !fullName || isAdmin === undefined) {
            return res.status(400).json("You must complete this field before!");
          }

        
        const userToAdmin= await User.update({ isAdmin }, { where: { id } })
    .then(() =>  res.status(200).json(userToAdmin));

        
        
    }catch(error){
        return res.status(404).json({error:error.message});
    }
})

module.exports= router;