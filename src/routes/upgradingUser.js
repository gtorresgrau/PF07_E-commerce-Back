const {Router}= require("express");

const {getUsersById}= require("../handlers/index");

const {getRole}= require("../handlers/routeProtection");

const router= Router();

router.put("/:id", getRole, async(req, res)=>{
    const {id}= req.params;
    const body= req.body;
    const role= req.role;
    const idToken= req.id;

    try{
        if(!body || !Object.keys(body).length) throw Error("No data provided. Nothing to upgrade");

        if(role === "admin" || parseInt(id) === parseInt(idToken)){
            const updatingUser= await getUsersById(id);

            const update= updatingUser.set(body);

            await updatingUser.save();

            return res.status(200).json(update);
        }
        return res.status(401).json("Unauthorized");
    }catch(error){
        return res.status(400).json(error);
    }
})

module.exports= router;