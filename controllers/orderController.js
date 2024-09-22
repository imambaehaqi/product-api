const Order = require('../models/Order');
const Product = require('./models/Product');

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll({ include: Product });
        res.json({ message: "Order List", data: orders });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve orders" });
    }
};

exports.createOrder = async (req, res) => {
    try {
        const { products } = req.body;
        const order = await Order.create();

        const productInstances = await Product.findAll({
            where: { id: products.map(p => p.id) }
        });

        await order.addProducts(productInstances);
        res.status(201).json({ message: "Order created", data: order });
    } catch (error) {
        res.status(500).json({ error: "Failed to create order" });
    }
};

exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByPk(id);
        if (!order) return res.status(404).json({ error: "Order not found" });

        await order.destroy();
        res.json({ message: "Order deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete order" });
    }
};
