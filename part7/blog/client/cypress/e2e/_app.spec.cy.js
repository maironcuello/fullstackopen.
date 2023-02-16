


describe('template spec', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Front page can be opened', () => {
    cy.contains('Log in to Application')
  })
  it('fails with wrong credentials', () => {
    cy.contains('Login').click()
    cy.get('#username').type('mairon')
    cy.get('#password').type('1234')
    cy.get('#login-button').click()

    cy.contains('Log in to Application')
  })

  it('succeeds with correct credentials', () => {
    cy.contains('Login').click()
    cy.get('#username').type('mairon')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()

    cy.contains('- logged IN')
  })
})

describe('Crate a new blog', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.get('#username').type('mairon')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()
  })

  it('New blog', () => {
    cy.get('#new-blog').click()
    cy.contains('New blog')
    cy.get('#title').type('Cocina Italiana')
    cy.get('#author').type('Breiner Enrrique Cuello')
    cy.get('#url').type('www.cocinaitaliana.com')
    cy.get('#button-create').click()
    cy.get('#cancel-newblog').click()
  })

  it('Like', () => {
    cy.contains('View').click()
    cy.get('#button-like').click()
  })

})

describe('Delete blog', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.contains('Login').click()
    cy.get('#username').type('mairon')
    cy.get('#password').type('123456')
    cy.get('#login-button').click()
  })

  it('Delete blog', () => {
    cy.contains('View').click()
    cy.contains('delete blog').click()
  })
});