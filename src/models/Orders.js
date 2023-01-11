const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("order", {
        order_number: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
              model: 'users', 
              key: 'id'
            }
        },
        status: {
            type: DataTypes.ENUM,
            values: ['pending', 'process', 'completed', 'cancelled'],
            defaultValue: 'pending'
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        shipping_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        billing_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        items: {
            type: DataTypes.JSONB,
            allowNull: true
        },
        payment_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
              model: 'payments', 
              key: 'id'
            }
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: true
        }
    });
}