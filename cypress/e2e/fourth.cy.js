//login spec
describe('Working with inputs',()=>{
    // beforeEach(()=>{
    //     cy.visit('https://devexpress.github.io/testcafe/example/')
    // })
    it('should load login page',()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.get('#user_login').clear()
        cy.get('#user_login').type('some invalid name')
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some invalid password')
        cy.contains('Sign In').click()
        cy.get('.alert-error').should('be.visible')
    })

})