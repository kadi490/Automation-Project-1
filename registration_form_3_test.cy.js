beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
})

//BONUS TASK: add visual tests for registration form 3

/*
Task list:
* Test suite for visual tests for registration form 3 is already created
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns
    * checkboxes, their content and links
    * email format
 */

describe('Section 1: visual tests', ()=> {
        it('Check that radio button list is correct', () => {
            cy.get('input[type="radio"]').should('have.length', 4)
            cy.get('input[type="radio"]').next().eq(0).should('have.text','Daily').and('not.be.checked')
            cy.get('input[type="radio"]').next().eq(1).should('have.text','Weekly').and('not.be.checked')
            cy.get('input[type="radio"]').next().eq(2).should('have.text','Monthly').and('not.be.checked')
            cy.get('input[type="radio"]').next().eq(3).should('have.text','Never').and('not.be.checked')

            cy.get('input[type="radio"]').eq(3).check().should('be.checked')
    });
})

//BONUS TASK: add functional tests for registration form 3

/*
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + validation
    * only mandatory fields are filled in + validations
    * mandatory fields are absent + validations (try using function)
    * If city is already chosen and country is updated, then city choice should be removed
    * add file (google yourself for solution)
 */