const Router = require('express');
const { Op } = require('sequelize');
const router = Router();
const {allUsers}= require("../controllers/getUsers");
const {User,Sneakers,Cart}= require("../db");

router.get("/", async(req,res)=>{
try{

    const {username}= req.query;
    
    if(await User.count()===0){
        const uData= await allUsers();
        await User.bulkCreate(uData);
    }
    
    if(username){
        const userN= await User.findAll({
            where:{username:{[Op.iLike]:`%${username}%`}},  
            include:[{
                model: Sneakers,
                as:"sneakerOwner",
            },{
                model: Cart,
                as:"cartUser",
                include:{
                    model: Sneakers,
                    through: {attributes: []},
                }
            }]
        }
        )
        
        if(!userN){
            return res.status(404).json({error: error.message});
        }
        return res.status(200).json(userN);
    }
    const allUs= await User.findAll({include:[{
        model: Sneakers,
        as:"sneakerOwner",
    },{
        model: Cart,
        as:"cartUser",
        include:{
            model: Sneakers,
            through: {attributes: []},
        }
    }]});

    return res.status(200).json(allUs);

}catch(error){
    
    return res.status(404).json(error);
}

})

module.exports = router;