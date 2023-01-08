const {Router}= require("express");

const router= Router();

const {Sneakers}= require("../db");


router.put("/:id", async(req,res)=>{
    try{
        
        const { id } = req.params;
        const {title,price,image,description,size, stock, brand,genre, colour, type, rating}= req.body;

        if (!id || !title || !price || !image || !description || !size || !stock || !brand || !genre || !colour || !type) {
            return res.status(400).json("You must complete this field before!");
          }
          
        
        const sneakModified= await Sneakers.update(
            { title, price, image, description, size, stock, brand, genre, colour, type },
            { returning: true, where: { id } });

        return res.status(200).json(sneakModified);
    }catch(error){
        return res.status(404).json({error: error.message});
    }
})

module.exports= router;