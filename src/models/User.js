const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('user',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
        username:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        fullName:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        password:{ 
            type: DataTypes.STRING,
            allowNull:true,
        },
        image:{
            type: DataTypes.STRING,
            allowNull:true
        },
        emailAddress:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        homeAddress:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        region:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        city:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        phoneNumber:{
            type: DataTypes.INTEGER,
            allowNull:true,
        },
               /*history= transaction model*/        
        history:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        guest:{
            type: DataTypes.BOOLEAN,
            allowNull:true,
            defaultValue: true,
        },
        loggued:{
            type: DataTypes.BOOLEAN,
            allowNull:true,
            defaultValue: false,
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
        superAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
            defaultValue: false,
        },
})
}