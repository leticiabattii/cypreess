describe('Testando o taskhub', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/')
  });
  it('Cadastro no taskhub', () => {
    cy.get('a').contains('Get Started').click()
    cy.get('#name').type('emily')
    cy.get('#email').type('emilycypress@gmail.com') 
    cy.get('#password').type('emily147')
    cy.get('button[type="submit"]').click()
    cy.get('a').contains('Sign In').click()
    cy.get('#email').type('emilycypress@gmail.com') 
    cy.get('#password').type('emily147')
    cy.get('[data-cy=botao-login]').click()
    cy.get('a').contains('Projects').click()
    cy.get('button[type="button"]').contains('Create Project').click()
    cy.get('#name').type('Testes') 
    cy.get('#description').type('Realizando um teste!') 
    cy.get('#owner').select('Select an owner')
    cy.get('#owner').select(1); 
    cy.get('#react-select-2-input').click().type('emily{enter}')
    cy.get('#react-select-3-input').click().type('teste{enter}')
    cy.get('button[type="submit"]').contains('Create Project').click()
  });
})