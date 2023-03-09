describe('Browser Actions',()=>{
    it('should load books website',()=>{
        cy.visit('http://books.toscrape.com/index.html',{timeout:10000})
        cy.url().should('include','index.html')
    })
    
})