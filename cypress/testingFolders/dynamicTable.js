/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.

describe('Playing around mini apps', function () {
    it('testing Dynamic Table', function () {

    cy.visit(Cypress.env("url"));
    cy.contains("Dynamic Table").click();
    cy.get("tbody tr").each(($e1, index, $list) => {
      const superHero = $e1.text();
      if (superHero.includes("Spider-Man")) {
        cy.get("tbody tr td span.text-sm").should(
          "include.text",
          "Peter Parker"
        );
      }

        cy.visit(Cypress.env('url'))
        cy.contains('Dynamic Table').click()
        cy.get('tbody tr').each(($e1, index, $list) => {
            const superHero = $e1.text()
            if (superHero.includes('Spider-Man')) {
                cy.get('tbody tr td span.text-sm').should('include.text', 'Peter Parker')
            }
        
            
        })
    })

})

//Lession learned: when selecting elements in dynamic table, make sure to select all table rows (not table itself)
