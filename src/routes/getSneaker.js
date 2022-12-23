const { Router } = require('express');
const router = Router();
const {sneakerId}=require('../controllers/getSneaker')

router.get('/:id', async ( req,res)=>{
    const {id} = req.params;
    try {
        const search = await sneakerId(id);
        res.status(200).send(search);
    }catch (error) { 
            res.status(404).send("Sneaker not found")
        }
});

module.exports={router}