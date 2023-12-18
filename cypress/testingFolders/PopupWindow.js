/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.

describe("Playing around mini apps", function () {
  it("testing Popup Window", function () {
    //Find the Spider-Man in a table that changes the order of rows and assert his real name

    cy.visit(Cypress.env("url"));
    cy.contains("Pop-Up Window").click();
    cy.get(".btn.btn-lg").click();
    cy.openPopUp();
    cy.get('button[type="button"]').should("be.visible");
    cy.get('button[type="button"]').click();
    cy.get(".flex-center").should("have.text", "Button Clicked");
  });
});
