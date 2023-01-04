const {DataTypes}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("order",{
        detail:{
            type: DataTypes.STRING,
            allowNull: true
        },
        payment:{
            type: DataTypes.STRING,
            allowNull: true
        }
    })
}