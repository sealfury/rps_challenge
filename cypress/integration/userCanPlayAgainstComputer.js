describe('RPS Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Plays Rock', () => {
    cy.get('button#rock').click();
    cy.get('#message').should('contain', 'Scoreboard')
  })

  it('Plays Scissors', () => {
    cy.get('button#scissors').click();
    cy.get('#message').should('contain', 'Computer')
  })

  it('Plays Paper', () => {
    cy.get('button#paper').click();
    cy.get('#message').should('contain', 'You')
  })
})