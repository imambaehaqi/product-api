const Product = require('./models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json({ message: "Product List", data: products });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve products" });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { name, price, stock } = req.body;
        const product = await Product.create({ name, price, stock });
        res.status(201).json({ message: "Product created", data: product });
    } catch (error) {
        res.status(500).json({ error: "Failed to create product" });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, stock } = req.body;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: "Product not found" });

        product.name = name;
        product.price = price;
        product.stock = stock;
        await product.save();
        res.json({ message: "Product updated", data: product });
    } catch (error) {
        res.status(500).json({ error: "Failed to update product" });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) return res.status(404).json({ error: "Product not found" });

        await product.destroy();
        res.json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ error: "Failed to delete product" });
    }
};
