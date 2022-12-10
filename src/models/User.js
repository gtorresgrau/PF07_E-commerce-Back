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
        history:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:true,
        },
        favourites:{
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
        },
        status:{
            type: DataTypes.STRING,
            allowNull: true,
        },
        isAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        superAdmin:{
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        isRegistered:{
            type: DataTypes.BOOLEAN,
            allowNull:true,
        }
})
}