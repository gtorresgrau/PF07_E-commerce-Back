const e = require('express');
const { Router } = require('express');
const router = Router();
const {Sneaker} = require('../db');

router.delete('/deleting/:id', async ( req,res)=>{
    const {id} = req.params;
    try {
        const deleteSneaker = await Sneaker.destroy({where:{id:+id}});

        if(deleteSneaker){
            alert(`You are going to delete de Sneaker whit id: ${deleteSneaker}`)
            res.status(200).send(this.delete);
        }
    }catch (error) { 
        console.error(error)
        res.status(404).send("Sneaker not found")
        }
});

module.exports = router;