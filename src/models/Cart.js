const {DataTypes}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("cart",{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        amount:{
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    })
}