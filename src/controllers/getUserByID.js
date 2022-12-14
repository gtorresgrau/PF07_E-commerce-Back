const { User } = require("../db");



const UID = async (id) => {
  const userId = await User.findOne({where: {id: id}});

  const uID = {
    id: userId.id,
    username: userId.username,
    fullName: userId.fullName,
    password: userId.password,
    image: userId.image,
    emailAddress: userId.emailAddress,
    homeAddress: userId.homeAddress,
    region: userId.region,
    city: userId.city,
    phoneNumber: userId.phoneNumber,
    history: userId.history,
    status: userId.status,
    guest: userId.guest,
    loggued: userId.loggued,
    isAdmin: userId.isAdmin,
    superAdmin: userId.superAdmin,
};
  return uID;
};
module.exports = { UID };
