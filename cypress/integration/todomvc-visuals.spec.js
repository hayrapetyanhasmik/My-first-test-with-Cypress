/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', function(){
    before(function(){
        todoPage.navigate()
    })
    
    beforeEach(function(){
        cy.eyesOpen({appName: 'TAU TodoMVC', batchName: 'TAU TodoMVC Hey!'})
    });
    afterEach(function(){
        cy.eyesClose()
    });
    it('should look good', function(){
        cy.eyesCheckWindow('empty todo list')

        todoPage.addTodo('Learn Cypress')
        todoPage.addTodo('Learn JavaScript')

        cy.eyesCheckWindow('two todos')

        todoPage.toggleTodo(0)

        cy.eyesCheckWindow('mark as completed')
    })
})