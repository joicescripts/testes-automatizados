require('dotenv').config();
const request = require('supertest');
const server = require('../../index');
const mongoose = require('mongoose');

describe('[E2E] User create',()=>{
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_DB_URL)
    })

    afterAll(async () => {
        await mongoose.connection.close()
    })
    it('should create a new user and returns status code 200', async () => {
        const res = await request(server).post('/user').send({
        
            name: 'João Carlos',
            email: 'joao@email.com',
            password: '1234',
            confirmPassword: '1234'
        })

        expect(res.status).toBe(200)
    })
})