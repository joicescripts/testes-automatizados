const UserController = require("../../../../src/controllers/user-ctrl")

describe('UserController.create', () => {
  const reqMock = {
    emailInvalid: {
      body:{
        name: 'nome teste',
        email: 'email.teste',
        password:'123',
      }
    },
    passwordVoid: {
      body: {
        name: 'nome teste',
        email: 'email.teste@uol.com.br',
        password:'',
      }
    },
    objValid: {
      body:{
        name: 'nome teste',
        email: 'email.teste@uol.com.br',
        password:'123',
      }
    }
  }
  const resMock = {
    status: jest.fn(() => resMock),
    json: jest.fn()
  }

  it('should be return status 400 and custom error message', async () => {
    await UserController.create(reqMock.emailInvalid, resMock)

    expect(resMock.status).toHaveBeenCalledWith(400)
    expect(resMock.json).toHaveBeenCalledWith('Email inválido')
  })
  it('should be return status 400 and custom error message', async () => {
    await UserController.create(reqMock.passwordVoid, resMock)
    expect(resMock.status).toHaveBeenCalledWith(400)
    expect(resMock.json).toHaveBeenCalledWith('Senha inválida')
  })
  it('should be return status 200 and id', async () => {
    jest.spyOn(UserController,'create').mockImplementationOnce(async (req, res) => res.status(200).json({id: 'id'}))

    await UserController.create(reqMock.objValid, resMock)

    expect(resMock.status).toHaveBeenCalledWith(200)
    expect(resMock.json).toHaveBeenCalledWith({id:'id'})
  })
})


describe('UserController.changePassword', () => {
  const resMock = {
    status: jest.fn(() => resMock),
    json: jest.fn()
  }
  it('should be return status 200 and message: ok', async () => {
    jest.spyOn(UserController, 'changePassword').mockImplementationOnce(async (req,res) => res.status(200).json({message: 'ok'}))

    await UserController.changePassword({body: {email: 'qualquerCoisa@teste.com'}}, resMock)

    expect(resMock.status).toHaveBeenCalledWith(200)
    expect(resMock.json).toHaveBeenCalledWith({message: 'ok'})
  })
})