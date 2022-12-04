const { Router } = require('express');
const router = Router();
const {sneakerId}=require('../controllers/getSneaker')
    
     



    router.get('/:id', async ( req,res)=>{
        const {id} = req.params;
        try {
         
            res.json( await sneakerId(id))
        }

         catch (error) { 
            res.status(404).send("No se encuentra la zapatilla")
        }})

        module.exports=router