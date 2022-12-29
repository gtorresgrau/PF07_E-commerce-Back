const dataJSON = require('../DbJson/SneakerDb.json');
const { Sneakers } = require("../db");
const {User}= require("../db");
const dataU = require("../DbJson/users.json");

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
        type: s.type,
        rating: s.rating
      }
    })
  }) 
}

const allU = async()=>{
  dataU.forEach(u=>{
    User.findOrCreate({
      where: {
        username: u.username,
        fullName: u.fullName,
      },
      defaults:{
        password: u.password,
        image: u.image,
        emailAddress: u.emailAddress,
        homeAddress: u.homeAddress,
        region: u.region,
        city: u.city,
        phoneNumber: u.phoneNumber,
        history: u.history,
        guest: u.guest,
        loggued: u.loggued,
        isAdmin: u.isAdmin,
        superAdmin: u.superAdmin,
      }
    })
  })
}

module.exports = {
  insertData,
  allU
}