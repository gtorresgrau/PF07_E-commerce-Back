const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('user', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        userName: {
            type: DataTypes.STRING,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shippingAddress: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        country: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.INTEGER,
        },
        orders: {
            type: DataTypes.ARRAY(DataTypes.STRING),
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isBanned: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        superAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    },{timestamp:false})
}
