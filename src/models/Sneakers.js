const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('sneakers',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        title:{
            type: DataTypes.STRING,
            allowNull:false
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        description:{ 
            type: DataTypes.STRING(10000),
            allowNull:false
        },
        size:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image:{
            type: DataTypes.STRING,
            allowNull:false
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        brand:{
            type: DataTypes.STRING,
            allowNull:false
        },
        model:{
            type: DataTypes.STRING,
            allowNull:false
        },
        genre:{
            type: DataTypes.ENUM("Kids","Women","Men","All"),
            allowNull: false,
        },
        colour:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        type:{
            type: DataTypes.ENUM("Sports", "Running", "Training", "All")
        }
    })
}