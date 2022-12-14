const {User}= require("../db");

const createUser= async({username, fullName, password, image, emailAddress,homeAddress,region,city,phoneNumber,history,status,guest,loggued,isAdmin,superAdmin})=>{
const [userCreated, state]= await User.findOrCreate({
    where:{username: username, fullName: fullName},
    defaults:{
        password,
         image,
          emailAddress,
          homeAddress,
          region,
          city,
          phoneNumber,
          history,
          status,
          guest,
          loggued,
          isAdmin,
          superAdmin,
    }
})
return state;
}

module.exports= {createUser};