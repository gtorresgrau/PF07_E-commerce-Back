const {DataTypes} = require('sequelize');

module.export = (sequelize) =>{
    sequelize.define('user',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        username:{
            type: DataTypes.STRING,
            allowNull:false
        },
        password:{ 
            type: DataTypes.STRING,
            allowNull:false
        },
        image:{
            type: DataTypes.STRING,
            allowNull:false
        },
        emailAddress:{
            type:DataTypes.EMAIL,
            allowNull:false
        },
        homeAddress:{
            type: DataTypes.STRING,
            allowNull:false
        },
        region:{
            type: DataTypes.STRING,
            allowNull:false
        },
        city:{
            type: DataTypes.STRING,
            allowNull:false
        },
        phoneNumber:{
            type: DataTypes.INTEGER,
            allowNull:false
        },
        history:{
            type: DataTypes.ARRAY,
            allowNull:false
        },

    })
}