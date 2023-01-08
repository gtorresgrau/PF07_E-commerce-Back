const {Router}= require("express");

const router= Router();

const {Sneakers}= require("../db");


router.put("/", async(req,res)=>{
    try{
        

        const {id,title,price,image,description,size, stock, brand,genre, colour, type, rating}= req.body;


        
        const sneakModified= await Sneakers.findAll( {where: {id:id, title:title, price:price, image:image, description:description, size:size, stock:stock, brand:brand, genre:genre, colour:colour, type:type, rating:rating}});

        return res.status(200).json(sneakModified);
    }catch(error){
        return res.status(404).json({error: error.message});
    }
})

module.exports= router;