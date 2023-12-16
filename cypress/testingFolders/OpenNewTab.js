/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.

describe("Playing around mini apps", function () {
  it("OpenNewTab", function () {
    //Open new tab by clicking on the button
    //and assert the text on the new opened page

    cy.visit(Cypress.env("url"));
    cy.get(".card-content").contains("New Tab").click();
    //Use the invoke command to perform an action on element with class .btn-btn-lg
    cy.get(".btn.btn-lg").invoke("removeAttr", "target").click();
    cy.get("#wrapper").should("include.text", "Welcome to the new page!");

    //Lession learned: if the new opened page (child) has the same url with its
    //parents. Should not use cy.origin()
  });
});
