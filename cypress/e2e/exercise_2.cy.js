//login spec
describe('Working with inputs',()=>{
    // beforeEach(()=>{
    //     cy.visit('https://devexpress.github.io/testcafe/example/')
    // })
    it('should load login page',()=>{
        //should override the current time
        const date = new Date(2020,3,10).getTime()// return a timestamp
        cy.clock(date)
        cy.log(date)
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.clearCookies({ log: true })
        cy.clearLocalStorage('your item', {log:true})
        cy.title().should('include','Zero - Log in')
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
        cy.get('.alert-error').should('be.visible').and('contain','Login and/or password are wrong')
       
    })

})