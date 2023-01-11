const { timeStamp } = require('console');
const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Review',{
      sneakerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(1000),
        allowNull: true,
        },
      stars: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },{timestamps:false})
};