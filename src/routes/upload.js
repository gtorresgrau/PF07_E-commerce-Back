const { Router } = require('express');
const router = Router();
const cloudinary = require('../utils/Cloudinary');


router.post('/', async (req, res) => {
    const {image} = req.body;
    //console.log('imageUp:', image)
    try {
    const uploadedResponse = await cloudinary.uploader.upload(image,
         { 
            upload_preset:'HenrySneakers'
        });
        console.log('uploadresp:',uploadedResponse);
        res.status(200).json(uploadedResponse)
    } catch (error) {
        console.error('ErrorUP',error)
        res.status(500).send('something went')
    }
})

module.exports = router;