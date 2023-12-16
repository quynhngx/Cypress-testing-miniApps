/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.

describe("Playing around mini apps", function () {
  it("testing Multi Level Dropdown", function () {
    // Navigate into sub-menus and assert menu items text and link

    cy.visit(Cypress.env("url"));
    cy.contains("Multi Level Dropdown").click();
    cy.get("li:nth-child(4)").click();

    cy.NavigateToSubMenu("Settings");
    cy.NavigateToSubMenu("Animals");
  });
});
