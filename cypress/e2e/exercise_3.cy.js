describe('Browser Actions', () => {
    it('should load correct url', () => {
        cy.visit('http://example.com', { Timeout: 1000 })
        cy.url().should('include', 'example.com')
        cy.log('Website Loaded')
        cy.wait(3000)
        cy.pause()
        cy.get('h1').should('be.visible')
    })
})