const { Router } = require('express');
const router = Router();
const {UID}=require('../controllers/getUserByID')
const {User,Sneakers,Cart}= require("../db");  
     
    router.get('/:id', async ( req,res)=>{
        try {
            const {id} = req.params;
            const uDB= await UID(id);

            if(uDB){
                const uniqueUser= await User.findByPk(id,{ include:[{
                    model: Sneakers,
                    as:"sneakerOwner",
                },{
                    model: Cart,
                    as:"cartUser",
                    include:{
                        model: Sneakers,
                        through: {attributes: []},
                    }
                }]})
                return res.status(200).json(uniqueUser);
            }
        }

         catch (error) { 
           res.status(404).send("No se encuentra la zapatilla")
        }})

        module.exports=router;