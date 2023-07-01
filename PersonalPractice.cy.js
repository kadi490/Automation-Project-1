describe('PersonalPractice', () => {
   
    // #id   .class  [attirbute= ..]

it('Performing a Google search', () => {
    cy.visit("https://www.google.com/")
    cy.get("#L2AGLb").click() //clicks I AGREE on terms and conditions
    cy.get("#APjFqb").type('snakes with hands').type('{enter}')
    cy.get('[data-hveid="CA8QAQ"]').click() //selects "Meme" from the suggestions bar
})
});