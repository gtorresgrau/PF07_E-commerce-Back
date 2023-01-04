const { Router } = require('express');
const router = Router();
const {reviewId} = require('../controllers/getSneaker')

router.get('/:id', async ( req,res)=>{
    const {id} = req.params;
    try {
        const search = await reviewId(id);
        res.status(200).send(search);
    }catch (error) { 
            res.status(404).send("There are no reviews for this sneakers")
        }
});

module.exports = router;