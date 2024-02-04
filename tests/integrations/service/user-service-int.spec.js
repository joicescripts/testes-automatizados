require('dotenv').config()
const mongoose = require('mongoose')
const {faker} = require('@faker-js/faker')
const UserService = require('../../../src/services/user-service')

const newUser = {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe('UserService', () => {
    beforeAll(async () => {
        await mongoose.connect(process.env.MONGO_DB_URL)
        await UserService.createUser(newUser)
    })

    afterAll(async () => {
        //await User.deleteMany({})
        await mongoose.connection.close()
    })

    it('should create a new  user', async () => {
        const usuarioCadastrado = await UserService.createUser({
                name: faker.name.fullName(),
                email: faker.internet.email(),
                password: faker.internet.password()
        })

        expect(usuarioCadastrado).toHaveProperty('id')
    })

    it('should return true when user exists', async () => {
        const userExists = await UserService.userExistsAndCheckPassword({
            email: newUser.email,
            password: newUser.password
        })

        expect(userExists).toBe(true)
    })

    it('should return false when user does not exists', async () => {
        const userExists = await UserService.userExistsAndCheckPassword({
            email: 'jj',
            password: '12'
        })
        expect(userExists).toBe(false)
    })

    it('should throw an error when password does not match', async () => {
        try {
            await UserService.userExistsAndCheckPassword({
                email: newUser.email,
                password: '1234'
            })
        } catch (error) {
            expect(error).toHaveProperty('status', 400)
            expect(error).toHaveProperty('message', 'As senhas não batem')
        }
    })
})
