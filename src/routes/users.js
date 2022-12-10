const Router = require('express');
const { Op } = require('sequelize');
const router = Router();
const {allUsers}= require("../controllers/getUsers");
const {User}= require("../db");
const {GetAllUsers}= require("../handlers/index")

const {getRole}= require("../handlers/routeProtection")

/*router.get("/", async(req,res)=>{
try{

    const {username}= req.query;
    
    if(await User.count()===0){
        const uData= await allUsers();
        await User.bulkCreate(uData);
    }
    
    if(username){
        const userN= await User.findAll({where:{username:{[Op.iLike]:`%${username}%`}}})
        
        if(!userN){
            return res.status(404).json({error: error.message});
        }
        return res.status(200).json(userN);
    }
    const allUs= await User.findAll();

    return res.status(200).json(allUs);

}catch(error){
    
    return res.status(404).json(error);
}

})
*/

router.get("/",getRole, async(req,res)=>{

    try{
        if(req.role !== "admin") throw sError("You are not an admin", 400);

        const usersDb= await GetAllUsers();
       return res.status(200).json(usersDb);

    }catch(error){
        return res.status(404).json(error.message);
    }
})



module.exports = router;