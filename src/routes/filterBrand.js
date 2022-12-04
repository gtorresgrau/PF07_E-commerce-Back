const { Router } = require('express');
const router = Router();
const {brandFilter}=require('../controllers/filterBrand')
    
     
router.get('/:brand', async ( req,res)=>{
    const {brand} = req.params;
    try {
     
        res.json( await brandFilter(brand))
    }

     catch (error) { 
        res.status(404).send("No se encuentra la marca")
    }})

    module.exports=router


