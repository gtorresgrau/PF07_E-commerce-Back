const Router= require("express");

const {auth}= require("express-openid-connect");

const {createUser}= require("../controllers/postUser");

const router= Router();


  router.post("/", async (req,res)=>{
      try{
        const {username, fullName, password,image,emailAddress,homeAddress,region,city,phoneNumber,history,status,guest,loggued,isAdmin,superAdmin}= req.body;
  
        if(!username || !fullName || !emailAddress || !password){
            return res.status(400).json("The user must complete this fields");
        }

            const newUser= await createUser({username,fullName,emailAddress,password,guest:false, loggued:true});
            console.log(newUser);
            return res.status(201).json(newUser);
        
    }catch(error){
        return res.status(400).json(error);
    }
  })

module.exports= router;