const request = require('supertest');
const app = require('../app');

describe('Product API', () => {
    it('should fetch all products', async () => {
        const response = await request(app).get('/api/products');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
    });

    it('should create a new product', async () => {
        const newProduct = {
            name: 'New Product',
            price: 5000,
            stock: 10
        };
        const response = await request(app)
            .post('/api/products')
            .send(newProduct);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('data');
    });

    it('should update a product', async () => {
        const response = await request(app)
            .put('/api/products/1')
            .send({ name: 'Updated Product', price: 6000, stock: 5 });
        expect(response.status).toBe(200);
    });

    it('should delete a product', async () => {
        const response = await request(app).delete('/api/products/1');
        expect(response.status).toBe(200);
    });
});
