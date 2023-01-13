const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Orders", {
        email: {
            type: DataTypes.STRING,
            allowNull: true
        },
        client_id: {
            type: DataTypes.STRING,
            allowNull: true
        },
        prefId: {
            type: DataTypes.STRING,
            allowNull: true
        },
        items: {
            type: DataTypes.ARRAY(DataTypes.JSON),
            allowNull: true
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true
        },
        payer: {
            type: DataTypes.JSON,
            allowNull: true
        },
        delivered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, { timestamp: false })
}


