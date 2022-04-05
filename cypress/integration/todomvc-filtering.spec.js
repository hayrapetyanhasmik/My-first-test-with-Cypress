/// <reference types="cypress" />

describe('filtering', function(){
    beforeEach(function() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')

        cy.get('.new-todo').type('Learn Cypress{enter}')
        cy.get('.new-todo').type('Learn JavaScript{enter}')
        cy.get('.new-todo').type('Use Cypress{enter}')

        cy.get('.todo-List li:nth-child(2).toggle').click()
    })

    it('should filter "Active" todos', function(){
        cy.contains('Active').click()

        cy.get('.todo-List li').should('have.length', 2)
    })

    it('should filter "Completed" todos', function(){
        cy.contains('Completed').click()

        cy.get('.todo-List li').should('have.length', 1)
    })

    it('should filter "Active" todos', function(){
        cy.contains('Active').click()

        cy.get('.todo-List li').should('have.length', 2)
    })

    it('should filter "All" todos', function(){
        cy.contains('All').click()

        cy.get('.todo-List li').should('have.length', 3)
    })

})