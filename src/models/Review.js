const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Review',{
      sneakerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    })
};