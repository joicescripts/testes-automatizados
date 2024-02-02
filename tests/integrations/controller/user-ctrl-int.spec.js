const UserController = require('../../../src/controllers/user-ctrl')
const UserService = require('../../../src/services/user-service')

const req = {
    body: {
        name: 'João Carlos',
        email: 'joao@email.com',
        password: '123456'
    }
}

const res = {
    status: jest.fn(()=> res),
    json: jest.fn(()=> res)
}

describe('User Controller', () => {

    it('should return 200 when user is created', async () => {

        UserService.createUser = jest.fn(() => ({ id: 1 }))
        await UserController.create(req, res)

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ id: 1 })
    })

    it('should return 500 when server error', async () => {

        UserService.createUser = jest.fn(() => { throw new Error('Server error') })
        
        await UserController.create(req, res)

        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith('Server error')
    })
})
