const { User }= require("../db");

const createUser = async({fullName, image, email})=>{

    const [userCreated, status]= await User.findOrCreate({
    where:{email: email},
    defaults:{
        fullName,
        image,
        email
    }
})
return status;
}

module.exports = {
    createUser
};