const { Router } = require('express');
const router = Router();
const {Sneakers}= require("../db");

const {Op}= require("sequelize");

    
router.get('/', async ( req,res)=>{

    try{

        const {title}= req.query;


        if(title){
            const sneakerName= await Sneakers.findAll({where:{title:{[Op.iLike]:`%${title}%`}}})

            if(!sneakerName){
                return res.status(404).json({error: error.message})
            }
            return res.status(200).json(sneakerName);
        }
        const allSneakers= await Sneakers.findAll();
        return res.status(200).json(allSneakers);
    }catch(error){
        return res.status(404).json(error);
    }
})

        module.exports=router;