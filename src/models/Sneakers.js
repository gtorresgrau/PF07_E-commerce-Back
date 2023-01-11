const { timeStamp } = require('console');
const {DataTypes} = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('Sneakers',{
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

        genre:{
            type: DataTypes.ENUM("Kids","Women","Men"),
            allowNull: false,
        },
        colour:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        type:{
            type: DataTypes.ENUM("Sports", "Running", "Training"),
            defaultValue: "Sports"
        },
    },{timestamps:false})
}