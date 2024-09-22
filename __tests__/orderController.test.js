const request = require('supertest');
const app = require('../app');

describe('Order API', () => {
    it('should fetch all orders', async () => {
        const response = await request(app).get('/api/orders');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
    });

    it('should create a new order', async () => {
        const newOrder = {
            products: [{ id: 1 }, { id: 2 }]
        };
        const response = await request(app)
            .post('/api/orders')
            .send(newOrder);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('data');
    });

    it('should delete an order', async () => {
        const response = await request(app).delete('/api/orders/1');
        expect(response.status).toBe(200);
    });
});
