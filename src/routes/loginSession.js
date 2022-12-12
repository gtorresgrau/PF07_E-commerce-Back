const {Router}= require("express");

const {getRole}= require("../handlers");

const admin= require("firebase-admin");

const {GOOGLE_CREDENTIALS}= require("../../config");

const {User,Sneakers,Cart}= require("../db");
const db = require("../db");

const serviceAccount= JSON.parse(GOOGLE_CREDENTIALS);

const loginSession= Router();

const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://henrysneakers-2022-default-rtdb.firebaseio.com/"
  });
  
  
loginSession.post("/", async (req,res)=>{
    const {token}= req.body;

    try{
        const user= await app.auth().verifyIdToken(token);
        const [dbUSer,created]= await User.findOrCreate({where:{emailAddress: user.email}})

        if(created){
            await dbUSer.createCartUser({total:0});
            await db.update({status:"active", isAdmin: false,})
        }
        const userWithCart= await User.findOne({where:{
            emailAddress: user.email
        },
    include:[{
        model: Cart,
        as:"cartUser",
        include:{
            model:Sneakers
        }
    }]
    });
    const role= await getRole(userWithCart.toJSON().emailAddress);
    return res.json({role: role, user: userWithCart.toJSON()})
    }
    catch(error){
        return res.status(401).json({error: error.message});
    }
})

module.exports= {loginSession,app};
