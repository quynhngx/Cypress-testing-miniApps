// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

Cypress.Commands.add("NavigateToSubMenu", (subMenuName) => {
  cy.get("a.menu-item").each(($e1, index, $list) => {
    const menu = $e1.text();
    if (menu.includes(subMenuName)) {
      cy.get("a.menu-item").eq(index).click();
      cy.get(".menu-item").should("have.length", 5);
      cy.get(".menu-item:nth-child(1)").click();
    }
  });
});

Cypress.Commands.add("openPopUp", () => {
  cy.window().then((win) => {
    // Open the pop-up
    win.open("popup.html", "PopUp", "width=300,height=420").focus();
  });
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
