describe('Browser Actions', () => {
    it('should load books website', () => {
        cy.visit('http://books.toscrape.com/index.html', { timeout: 10000 })
        cy.url().should('include', 'index.html')
        cy.log('before Reload')
        cy.reload()
        cy.log('After Reload')
        cy.get('a').contains('Travel').click()
        cy.get('h1').contains('Travel')
        //should display correct numbers of books
        cy.get('.product_pod').its('length').should('eq', 11)
        //exercise
        cy.get('a').contains('Poetry').click()
        cy.get('a').contains('Olio').click()
        cy.get('.price_color').contains('£23.88')
    })
})