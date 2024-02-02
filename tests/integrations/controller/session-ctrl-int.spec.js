const SessionController = require('../../../src/controllers/session-ctrl'); 
const SessionService = require('../../../src/services/session-service');
const UserService = require('../../../src/services/user-service');

const req = {
    body: {
        email: 'joao@email.com',
        password: 'senha-segura'
    }
}

const res = {
    status: jest.fn(()=> res),
    json: jest.fn(()=> res)
}

describe('Session Controller', () => {

    it('should return 404 when user is not found', async () => {
        req.body.email = 'joeo@email.com'
        req.body.password = 'senha-segura'

        UserService.userExistsAndCheckPassword = jest.fn(() => false)
        await SessionController.create(req, res)

        expect(res.status).toHaveBeenCalledWith(404)
    })
    it('should return 200 when user is logged', async () => {
        
        UserService.userExistsAndCheckPassword = jest.fn(() => true)
    
        SessionService.generateToken = jest.fn(() => 'token')
    
        await SessionController.create(req, res)
    
        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.json).toHaveBeenCalledWith({ token: 'token' })
    })
    
    it('should return 500 when server error', async () => {

        UserService.userExistsAndCheckPassword = jest.fn(() => true)
    
        SessionService.generateToken = jest.fn(() => { throw new Error('Server error') })
    
        await SessionController.create(req, res)
    
        expect(res.status).toHaveBeenCalledWith(500)
        expect(res.json).toHaveBeenCalledWith('Server error')
    })
})
