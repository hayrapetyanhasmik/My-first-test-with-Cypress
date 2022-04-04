/// <reference types="cypress" />

describe('todo actions', function(){ 
    beforeEach(function() {
        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo', {timeout: 4500}).type('Learn Cypress{enter}')
    })
    it('should add a new todo to the list', function(){
       cy.get('label').should('have.text', 'Learn Cypress')
       cy.get('.toggle').should('not.be.checked')
})

it('should mark a todo as completed', function(){
    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')
})

it('should clear completed todos', function(){
    cy.get('.toggle').click()
    cy.contains("Clear").click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
})
})