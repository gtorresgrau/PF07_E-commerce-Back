const {DataTypes} = require('sequelize');

module.export = (sequelize) =>{
    sequelize.define('shoes',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        title:{
            type: DataTypes.STRING,
            allowNull:false
        },
        description:{ 
            type: DataTypes.TEXT,
            allowNull:false
        },
        price:{
            type: DataTypes.DOUBLE,
            allowNull:false
        },
        stock:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        image:{
            type: DataTypes.STRING,
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
    })
}