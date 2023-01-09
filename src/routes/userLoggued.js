const {Router}= require("express");

const {User}= require("../db");


const router= Router();

router.put("/:id", async(req,res)=>{
    
    const {id}= req.params;


        try{
        const userLoggued= await User.findByPk(id);

        await userLoggued.createCartUser({total:0});

        return res.status(200).json(userLoggued);
    }
    catch(error){
        return res.status(400).json(error);
    }
})

module.exports= router;