const {User}= require("../db");

const allUsers= async()=>{
    const usersDB= await User.findAll();

    const users= usersDB.map(e=>{
        return{
            id: e.id,
            username: e.username,
            fullName: e.fullName,
            password: e.password,
            image: e.image,
            emailAddress: e.emailAddress,
            homeAddress: e.homeAddress,
            region: e.region,
            city: e.city,
            phoneNumber: e.phoneNumber,
            history: e.history,
            guest: e.guest,
            loggued: e.loggued,
            isAdmin: e.isAdmin,
            superAdmin: e.superAdmin,

        }
    })
    return users;
}

module.exports={
    allUsers,
}