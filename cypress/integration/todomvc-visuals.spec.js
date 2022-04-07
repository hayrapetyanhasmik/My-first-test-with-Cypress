/// <reference types="cypress" />
import * as todoPage from '../page-objects/todo-page'

describe('visual validation', function(){
    before(function(){
        todoPage.navigate()
    })

    it('should look good', function(){
        todoPage.addTodo('Learn Cypress')
        todoPage.addTodo('Learn JavaScript')

        todoPage.toggleTodo(0)
    })
})