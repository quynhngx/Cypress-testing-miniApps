/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.

describe('Playing around mini apps', function () {
    it('testing Multi Level Dropdown', function () {

        //Navigate into sub-menus and assert menu items text and link
    
        cy.visit(Cypress.env('url'))
        cy.contains('Multi Level Dropdown').click()
        cy.get('li:nth-child(4)').click()
        // cy.get('.menu').contains('Settings').click()
        // cy.get('.menu-item').should('have.length', 5)
        // cy.get('.dropdown').contains('My Tutorial').click()


        // cy.get('.menu').contains('Animals').click()
        // cy.get('.menu-item').should('have.length', 5)
        // cy.get('.dropdown').contains('Animals').click()

        // cy.get('.menu').each(($e1, index, $list) => {
        //     const submenu = $e1.text()
        //     if(submenu.includes('Settings')) {
        //         cy.get('.menu').eq(index).click()
        //         cy.get('.menu-item').should('have.length', 5)
        //         cy.get('.menu-item:nth-child(1)').click()
        //     }
        // })
        
        cy.NavigateToSubMenu('Settings')
        cy.NavigateToSubMenu('Animals')
        

    })
    })

    

