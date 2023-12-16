/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.

describe("Playing around mini apps", function () {
  it("testing Verify Your Account", function () {
    //Enter valid code by pressing key-up button or typing number and assert success message

    cy.visit(Cypress.env("url"));
    cy.contains("Verify Your Account").click();

    //1st way: type number
    for (let i = 1; i <= 6; i++) {
      // const selector = `div input:nth-child(${i})`;
      cy.get(`div input:nth-child(${i})`).type("9");
    }
    cy.get("div.container").should("include.text", "Success");
  });
});

// Lesson learned: The ${i} syntax is called a template literal, and it's a way to embed variables or expressions inside a string in JavaScript.
