const express = require('express');
const router = express.Router();
const { allSneakersDB } = require('../controllers/getAllDB')
const {Sneakers}= require("../db");
const {Op}= require("sequelize");

router.get('/', async (req, res) => {
 try{
    const {title}= req.query;

    if(await Sneakers.count()===0){
        const sneakys= await allSneakersDB();
        
        await Sneakers.bulkCreate(sneakys);
    }


    if(title){

        const sneaksName= await Sneakers.findAll({where:{title:{[Op.iLike]:`%${title}%`}}})

        if(!sneaksName){
            return res.status(404).json({error: message});
        }
        return res.status(200).json(sneaksName);
    }

    const allSneakers= await Sneakers.findAll();

    return res.status(200).json(allSneakers);
 }catch(error){
    return res.status(404).json(error);
 }
})
        



module.exports = router;