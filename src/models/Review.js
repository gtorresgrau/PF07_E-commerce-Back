const {DataTypes, UUIDV4} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Review',{
      id: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
      },
      sneakerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      text: {
        type: DataTypes.STRING(1000),
        allowNull: true
        },
      stars: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
    })
};