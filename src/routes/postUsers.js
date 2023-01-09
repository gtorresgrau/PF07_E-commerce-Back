const { Router } = require("express");
const router = Router();
const { auth } = require("express-openid-connect");
const { createUser }= require("../controllers/postUser");

router.post("/", async (req,res)=>{
  const {fullName, image, email}= req.body;
  if(!fullName || !email || !image) return res.status(400).json("The user must complete this fields");
  
  try{
    const newUser = await createUser({
      fullName,
      email,
      image
    });
    console.log(newUser);
    if(newUser) res.status(201).send('User added successfuly');
        
    }catch(error){
        // return res.status(400).json(error);
        console.log("post", error);
    }
})

module.exports = router;