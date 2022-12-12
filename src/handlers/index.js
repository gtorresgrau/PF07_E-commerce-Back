const {Cart, Sneakers, User} = require("../db");

async function GetAllUsers(){

  return await User.findAll({
    order:["id"],
    include:[
      {
      model: Sneakers,
      as:"sneakerOwner"
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

  async function getUserById(id) {
    if (!id) throw new Error("Missing ID");
    const user = await User.findByPk(id, {
      include: [
        {
          model: Sneakers,
          as: "sneakerOwner",
        },
        {
          model: Cart,
          as: "cartUser",
          include: {
            model: Sneakers,
            through: {
              attributes: [],
            },
          },
        },
      ],
    });
    if (!user) throw new Error("No user matches the provided ID");
    return user;
  }
  
const getRole= async(emailAddress)=> {

    const {fullName}= req.body;

    const user= await User.findOne({where:{emailAddress:emailAddress}})

    const status= user.toJSON().status;

    if(status!=="active") throw new Error(`The ${fullName} user isn´t active right now.-`)

    const role= user.toJSON().isAdmin? "admin": "user"

    return role;
}

module.exports= {GetAllUsers, getRole, getUserById};
