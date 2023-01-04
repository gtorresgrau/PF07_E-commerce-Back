const { Router } = require('express');
const router = Router();
const {reviewId} = require('../controllers/getReviews')

router.get('/:id', async ( req,res)=>{
    const {id} = req.params;
    console.log('BAgetID:',id)
    try {
        const search = await reviewId(id);
        res.status(200).send(search);
    }catch (error) { 
            res.status(404).send(`Something happend filtering by ID: ${id}`)
        }
});

module.exports = router;