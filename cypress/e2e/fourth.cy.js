//login spec
describe('Working with inputs',()=>{
    // beforeEach(()=>{
    //     cy.visit('https://devexpress.github.io/testcafe/example/')
    // })
    it('should load login page',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        //should fil username
        cy.get('#user_login').clear()
        cy.get('#user_login').type('some invalid name',{ delay:50})
        //should fill password
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some invalid password',{ delay:50})
        //should mark checkbox
        cy.get('input[type="checkbox"]').click()
        cy.wait(3000)
        //should submit login form
        cy.contains('Sign in').click()
        //should display error message
        cy.get('.alert-error').should('be.visible')
       
    })

})