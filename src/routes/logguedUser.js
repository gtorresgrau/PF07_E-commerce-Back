const {Router}= require("express");

const {getUsersById}= require("../handlers/index");

const {getRole}= require("../handlers/routeProtection");

const router= Router();

router.get("/", getRole, async(req,res)=>{
    const id= req.id;
    try{
        if(req.role==="guest") throw Error ("You aren´t signed.");
        const uniqueUser= await getUsersById(id);
        return res.json(uniqueUser);
    }catch(error){
        return res.status(404).json(error);
    }
})


module.exports= router;