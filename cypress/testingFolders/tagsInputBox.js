/// <reference types="Cypress" />
//describe part "My First Test" is a test suite.

describe('Playing around mini apps', function () {
    it('testing Tags Input Box', function () {

        //Add and remove tags and assert tag's presence and count

        cy.visit(Cypress.env('url'))
        cy.contains('Tags Input Box').click()

        //Add tags
        const tags = ['tag01', 'tag02', 'tag03', 'tag04', 'tag05', 'tag06', 'tag07', 'tag08'];

        tags.forEach((tag) => {
            cy.get('input[type="text"]').type(`${tag}{enter}`)
                });

        //Assert tag's presence
        cy.get('div p span').then(($element) => {
            const numberTagsRemain = parseInt($element.text()) 
            const numberTagsShow = 10 - numberTagsRemain
            cy.get('div ul li').should('have.length', numberTagsShow)
        })

        cy.wait(1000)

        //Remove tags
        //Remove all tags
        // cy.get('div.details').contains('Remove All').click()

        //Remove individual tag
        cy.get('.uit.uit-multiply').should('be.visible').click({ multiple: true })

    })
    })

    //Lession learned: 
    //No.01: If Cypress could not find the next element in a range, you should wait for the next element to exist by using the command .should('exist') or .should('be.visible')
    //N0.02: click({multiple:true}) => Cypress will iteratively apply the click to each element
 


