const Email = require('../../../../src/utils/email-validator')

const emailMock = {
  valid: 'joffre_quintas@hotmail.com',
  notValid:'emailTioZe@email.org'
}

describe('Email validator', () => {
  it('Should be return true when email is valid', () => {
    const validator = Email.isValid(emailMock.valid)

    expect(validator).toBe(true)
  })
  it('Should be return false when email is valid', () => {
    const validator = Email.isValid(emailMock.notValid)

    expect(validator).toBe(true)
  })

  
})