const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Product = require('../Product');

const Order = sequelize.define('Order', {
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'orders',
    timestamps: false
});

Order.belongsToMany(Product, { through: 'order_products', foreignKey: 'order_id' });
Product.belongsToMany(Order, { through: 'order_products', foreignKey: 'product_id' });

module.exports = Order;
