const UserService = require("../../../../src/services/user-service")

describe('UserService', () => {
  it('sould be return id', async () => {
    jest.spyOn(UserService, 'createUser').mockResolvedValueOnce({id: 'quarquer coisa'})

    const result = await UserService.createUser({name: 'teste', email: 'teste@email.com', password: 'oBom123'})

    expect(result).toEqual({id: 'quarquer coisa'})
  })
})