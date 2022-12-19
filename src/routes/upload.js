const { Router } = require('express');
const router = Router();
const cloudinary = require('../utils/Cloudinary');


router.post('/', async (req, res) => {
    try {
        const image = req.body;   
        //console.log('image:',image)
        const uploadedResponse = await cloudinary.uploader.upload(image,
            {
            upload_preset:'HenrySneaker',
            public_id: 'Sneaker',
            allowed_formats:['png','jpg','jpeg','svg','ico','jfif','webp']
            })
        console.log('uploadedResponse:',uploadedResponse)
    } catch (error) {
        console.error(error)
        res.status(500).send('something went')
    }
    res.status(200).send('Picture was uploaded')
})

module.exports = {router};