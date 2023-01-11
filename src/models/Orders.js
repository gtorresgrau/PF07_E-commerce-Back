const {DataTypes}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("Order",{
        detail:{
            type: DataTypes.STRING,
            allowNull: true
        },
        payment:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },{timestamp:false})
}