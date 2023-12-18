/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.
import "@4tw/cypress-drag-drop";

describe("Playing around mini apps", function () {
  it("Drag and drop items in a table", function () {
    //Drag and drop the items into their corresponding spots
    cy.visit(Cypress.env("url"));
    cy.contains("Sortable List").click();

    // for(let i=1; i<=9; i++) {
    //     cy.get(`ul li:nth-child(${i})`).drag(`ul li:nth-child(${i+1})`)
    //     cy.contains('Check Order').click()
    //     cy.get(`ul li:nth-child(${i})`).should('have.attr', 'class', 'right')
    // }
    cy.get("ul li:nth-child(1)").drag("ul li:nth-child(2)");
    cy.contains("Check Order").click();
    cy.get("ul li").each(($e1, index, $list) => {
      const hasRightClass = $e1.hasClass("right");
      const number = index + 1;
      if (hasRightClass) {
        cy.log(`Element at number ${number} has the class 'right'`);
      }
    });

    // cy.get('ul li:nth-child(2)').drag('ul li:nth-child(3)')
    // cy.get('ul li:nth-child(3)').drag('ul li:nth-child(4)')
    // cy.get('ul li:nth-child(4)').drag('ul li:nth-child(5)')

    // cy.get('tbody tr').each(($e1, index, $list) => {
  });
});
