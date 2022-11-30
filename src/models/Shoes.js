const {DataTypes, Model}= require("sequelize");

class Shoes extends Model{}

module.exports= (sequelize)=>{

    return Shoes.init({
        id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description:{
            type: DataTypes.STRING(500),
            allowNull: false,
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        image:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        brand:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },{
            sequelize, modelName: "shoes", timestamps:false
        })
    }