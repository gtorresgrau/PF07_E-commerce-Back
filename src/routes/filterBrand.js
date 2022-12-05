const { Router } = require('express');
const router = Router();
const {brandFilter}=require('../controllers/filterBrand')
    
     
router.get('/:brand', async ( req,res)=>{
    const {filtro} = req.params;
    try {
     
        res.json( await brandFilter(filtro))
    }

     catch (error) { 
        res.status(404).send("No se encuentra la marca")
    }})

    module.exports=router



    