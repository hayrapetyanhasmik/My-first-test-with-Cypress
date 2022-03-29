/// <reference types="cypress" />
it('should be able to add a new todo list', function(){
    cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.get('.new-todo', {timeout: 4500}).type('Learn Cypress{enter}')
    cy.get('label').should('have.text', 'Learn Cypress')
    cy.get('.toggle').should('not.be.checked')

    cy.get('.toggle').click()
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

    cy.contains("Clear").click()
    cy.get('.todo-list').should('not.have.descendants', 'li')
   
})
