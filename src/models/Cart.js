const {DataTypes}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("cart",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        total:{
            type: DataTypes.INTEGER,
            allowNull: true
        }
    })
}