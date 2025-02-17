const request = require('supertest');
const mongoose = require('mongoose');
const app = require('./server');

describe('API Tests', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    test('Register a new user', async () => {
        const res = await request(app).post('/register').send({
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123'
        });
        expect(res.statusCode).toBe(201);
    });

    test('Login user', async () => {
        const res = await request(app).post('/login').send({
            email: 'test@example.com',
            password: 'password123'
        });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('token');
    });

    test('Fetch IPO listings', async () => {
        const res = await request(app).get('/ipos');
        expect(res.statusCode).toBe(200);
    });
});
