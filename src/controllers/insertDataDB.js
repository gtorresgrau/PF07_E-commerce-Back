const dataJSON = require('../DbJson/SneakerDb.json');
const { Sneakers } = require("../db");
const uData= require("../DbJson/users.json");
const {User}= require("../db");

const insertData = async () => {
  dataJSON.forEach(s => {
    Sneakers.findOrCreate({
      where: {title: s.title},
      defaults: {
        title: s.title,
        price: s.price,
        image: s.image,
        description: s.description,
        size: s.size,
        stock: s.stock,
        brand: s.brand, 
        genre: s.genre, 
        colour: s.colour,
        type: s.type
      }
    })
  })
  
}


const getU= async()=>{
  uData.forEach(e=>{
    User.findOrCreate({
      where:{username: e.username, fullName: e.fullName},
      defaults:{
        password: e.password,
        image: e.image,
        emailAddress: e.emailAddress,
        homeAddress: e.homeAddress,
        region: e.region,
        city: e.city,
        phoneNumber: e.phoneNumber,
        history: e.history,
        favourites: e.favourites,
        isAdmin: e.isAdmin,
        superAdmin: e.superAdmin,
      }
    })
  })
}
module.exports = {
  insertData,
  getU
}