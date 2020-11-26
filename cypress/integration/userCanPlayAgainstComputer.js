describe('RPS Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'), {
      onBeforeLoad(window) {
        cy.stub(window.Math, "random").returns(1)
      }
    }
  })

  it('Plays Rock', () => {
    cy.get('button#rock').click();
    cy.get('#message').should('contain', 'You: 1')
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