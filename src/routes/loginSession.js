const {Router}= require("express");

const {getRole}= require("../handlers");

const admin= require("firebase-admin");

const {GOOGLE_APPLICATION_CREDENTIALS}= require("../config");

const serviceAccount= JSON.parse(GOOGLE_APPLICATION_CREDENTIALS);

const { initializeApp } = require('firebase-admin/app');

const {User, Cart, Sneakers}= require("../db");

const loginSessionR= Router();

const app= admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "henry-sneakers.firebaseapp.com"
})

loginSessionR.post("/",async(req,res)=>{
    const {token}= req.body

    try{
        const user= await app.auth().verifyIdToken(token);
        
        const [dbUser, created]= await User.findOrCreate({where:{emailAddress: user.email}});

        if(created){
            await dbUser.createCartUser({total:0});
            await dbUser.update({status:"active",isAdmin:false});
        }

        const userWithCart= await User.findOne({where:{
            emailAddress: user.email,
        },
        include:[{
            model:Cart,
            as:"cartUser",
            include:{
                model:Sneakers,
            }
        },{

        }]
    })

    const role= await getRole(userWithCart.toJSON().emailAddress);

    return res.status(201).json({role:role, user:userWithCart.toJSON()})
    
    }catch(error){
        return res.status(400).json({error: error.message});
    }
})

module.exports={
    loginSessionR,
    app
}