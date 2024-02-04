require('dotenv').config()
const SessionService = require('../../../../src/services/session-service.js')
const jwt = require('jsonwebtoken')
describe('SessionService integration', () => {
  it('should return token when session is create', () => {
    const teste = SessionService.generateToken({email: 'fulaninho.sivirino@grupoboticario.com.br'})

    expect(typeof teste).toBe('string')
  })
})