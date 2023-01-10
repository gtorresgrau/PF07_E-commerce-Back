const e = require('express');
const { Router } = require('express');
const router = Router();
const {Sneaker} = require('../db');

router.delete('/:id', async ( req,res)=>{
    const {id} = req.params;
    console.log('delId:',id)
    try {
        const deleteSneaker = await Sneaker.destroy({where:{id:+id}});
        console.log('deleteSneaker:',deleteSneaker)
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