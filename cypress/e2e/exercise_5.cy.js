describe('Device Tests',()=>{
    it('720p',()=>{
        cy.viewport(1280, 720)
        cy.visit('http://www.example.com')
        cy.wait(2000)
    })
    it('1080',()=>{
        cy.viewport(1980, 1080)
        cy.visit('http://www.example.com')
        cy.wait(2000)
    })
    
})