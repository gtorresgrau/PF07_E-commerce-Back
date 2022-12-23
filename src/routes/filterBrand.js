const { Router } = require('express');
const router = Router();
const {brandFilter}=require('../controllers/filterBrand')
 
router.get('/:brand', async ( req,res)=>{
    const {brand} = req.params;
    try {
        const search = await brandFilter(brand);
        res.status(200).send(search)
    }catch (error) { 
        res.status(404).send("Brand Not found")
    }
});

module.exports = router;



    