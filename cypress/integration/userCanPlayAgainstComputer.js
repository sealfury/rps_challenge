describe('RPS Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'), {
      onBeforeLoad(win) {
        cy.stub(win, 'getComputerChoice').returns('rock')
      }
    }
  })

  it('Plays Rock', () => {
    cy.get('button#rock').contains('Rock').click();
    cy.get('#message').should('contain', 'You: 0')
  })

  it('Plays Scissors', () => {
    cy.get('button#scissors').contains('Scissors').click();
    cy.get('#message').should('contain', 'Computer: 1')
  })

  it('Plays Paper', () => {
    cy.get('button#paper').contains('Paper').click();
    cy.get('#message').should('contain', 'You: 1')
  })
})