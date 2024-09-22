const express = require('express');
const app = express();
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

module.exports = server; // Ekspor untuk testing
