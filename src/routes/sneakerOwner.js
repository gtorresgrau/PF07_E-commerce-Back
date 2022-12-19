const {Router}= require("express");

const {User,Sneakers}= require("../db");

const router= Router();


router.put("/:id", async(req,res)=>{
    try{
    const {id}= req.params;

    const {rawusers}= req.body;
    
     if(!rawusers.length){
        return res.status(400).json({error: "Sorry, but you must complete this before! :D"})

     }
     const sneakerOwner= await Sneakers.findByPk(id);

     rawusers.forEach(async (user)=>{
        const u = await User.findByPk(user);

        await sneakerOwner.setOwner(u);
     })
     return res.status(200).json(sneakerOwner);
    }catch(error){
        return res.status(400).json(error);
    }
})


module.exports= router;