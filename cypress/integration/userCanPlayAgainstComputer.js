describe('RPS Game', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('Plays Rock', () => {
    cy.get('button#rock').click();
    cy.get('p#select-message').should('contain', 'You chose rock')
  })

  it('Plays Scissors', () => {
    cy.get('button#scissors').click();
    cy.get('p#select-message').should('contain', 'You chose scissors')
  })

  it('Plays Paper', () => {
    cy.get('button#paper').click();
    cy.get('p#select-message').should('contain', 'You chose paper')
  })
})