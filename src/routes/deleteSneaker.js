const { Router } = require('express');
const { deletingSneaker } = require('../controllers/deleteSneaker');
const router = Router();
const {Sneaker} = require('../db');


router.delete('/:id', async ( req,res)=>{
    const {id} = req.params;
    console.log('delId:',id, +id)
    try {
        const deleted = deletingSneaker(+id);
        res.status(200).send(`The sneaker wiht ${id} was successfully deleted`)
    }catch (error) { 
        console.error(error)
        res.status(404).send("Sneaker not found")
        }
});

module.exports = router;