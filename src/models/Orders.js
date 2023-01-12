const { DataTypes} = require('sequelize');

  

const Order = sequelize.define('order', {
    order_number: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    
    user_id: {
        type: DataTypes.UUID,
        references: {
            model: 'users',
            key: 'id'
        },
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'paid', 'delivered', 'cancelled'),
        defaultValue: 'pending',
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    billing_address: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    items: {
        type: DataTypes.JSONB
    },
    payment_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'payments',
            key: 'id'
        },
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    updated_at: {
        type: DataTypes.DATE,
    },


},
{
    timestamps: false,
   
 
}
);




