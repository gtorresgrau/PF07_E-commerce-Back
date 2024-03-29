require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY
} = process.env;

//console.log(process.env);


// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//   logging: false, // set to console.log to see the raw SQL queries
//   native: false, // lets Sequelize know we can use pg-native for ~30% more speed
// });

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});

const basename = path.basename(__filename);

//console.log(basename);
//console.log(sequelize);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

//console.log(fs);

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//console.log(modelDefiners);
//console.log(entries);
//console.log(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Sneakers, User, Orders } = sequelize.models;
//const {Cart}= sequelize.models;
const { Review } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);

//1-N
// User.hasMany(Sneakers, {as: "sneakerOwner"});
// Sneakers.belongsTo(User, {as: "sneakerOwner"});
Review.belongsToMany(Sneakers, { through: "sneakerReview" });
Sneakers.belongsToMany(Review, { through: "sneakerReview" });

// //1-1
// User.hasOne(Cart, {as:"cartUser", foreignKey:"cartUserId"})
// Cart.belongsTo(User, {as:"cartUser"})

// //N-N
// Sneakers.belongsToMany(Cart, {through: "cart_sneaker"})
// Cart.belongsToMany(Sneakers, {through: "cart_snekaer"})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
