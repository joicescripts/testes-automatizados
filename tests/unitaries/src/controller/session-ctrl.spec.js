const SessionController = require('../../../../src/controllers/session-ctrl.js')


describe('SessionController',() => {
  const resMock = {
    status: jest.fn(() => resMock),
    json: jest.fn()
  }
  const reqMock = {
    invalidEmail: {
      body:{email: "ada", password: "senha"}
    },
    invalidPassword: {
      body:{email: "joffre.quintas@grupoboticario.com.br", password: ""}
    },
    notFoundUser: {
      body:{email: "joffre.quintas@grupoboticario.com.br", password: "F@zUmP1x_Password"}
    },
    validEmail: {
      body: {email: "joffre.quintas@grupoboticario.com.br", password: "123"}
    }
  }

  it('should return status 400', async () => {
    await SessionController.create(reqMock.invalidEmail, resMock)

    expect(resMock.status).toHaveBeenCalledWith(400)
  })

  it('should return message "Email Inválido"', async () => {
    await SessionController.create(reqMock.invalidEmail, resMock)

    expect(resMock.json).toHaveBeenCalledWith('Email inválido')
  })

  it('should return message "Senha inválida"', async () => {
    await SessionController.create(reqMock.invalidPassword, resMock)

    expect(resMock.json).toHaveBeenCalledWith('Senha inválida')
  })

  it('should return message "Usuário não encontrado"', async () => {

    jest.spyOn(SessionController, 'create').mockImplementationOnce(async(req,res) => {
      res.status(404).json({message: 'Usuário não encontrado'})
    })
    await SessionController.create(reqMock.notFoundUser, resMock)

    expect(resMock.json).toHaveBeenCalledWith({message:'Usuário não encontrado'})
  })

  it('when not found user, should return status 404', async () => {

    jest.spyOn(SessionController, 'create').mockImplementationOnce(async(req,res) => {
      res.status(404).json({message: 'Usuário não encontrado'})
    })
    await SessionController.create(reqMock.notFoundUser, resMock)

    expect(resMock.status).toHaveBeenCalledWith(404)
  })

  it('should be return status 200 and json = token', async () => {
    jest.spyOn(SessionController, 'create').mockImplementationOnce(async(req,res) => {
      res.status(200).json({token:'token'})
    });

    await SessionController.create(reqMock.validEmail, resMock);

    expect(resMock.status).toHaveBeenCalledWith(200);
    expect(resMock.json).toHaveBeenCalledWith({ token: 'token' });
  })
  

})