const {Cart, Sneakers, User} = require("../db");

const GetAllUsers = async()=>{

  return await User.findAll({
    order:["id"],
    include:[
      {
      model: Sneakers,
      as:"user_sneakers"
      },
      {
        model: Cart,
        as: "cartUser",
        include: {
          model: Sneakers,
          through:{
            attributes:[],
          }
        }
      }
    ]
  })
}

const getRole= async(emailAddress)=> {

    const {fullName}= req.body;

    const user= await User.findOne({where:{emailAddress:emailAddress}})

    const status= user.toJSON().status;

    if(status!=="active") throw new Error(`The ${fullName} user isn´t active right now.-`)

    const role= user.toJSON().isAdmin? "admin": "user"

    return role;
}

module.exports= {GetAllUsers, getRole};