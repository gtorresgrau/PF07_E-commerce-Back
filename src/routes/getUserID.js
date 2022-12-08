const { Router } = require('express');
const router = Router();
const {UID}=require('../controllers/getUserByID')
    
     
    router.get('/:id', async ( req,res)=>{
        const {id} = req.params;
        try {
         
            res.status(200).json(await UID(id))
        }

         catch (error) { 
           res.status(404).send("No se encuentra la zapatilla")
        }})

        module.exports=router;