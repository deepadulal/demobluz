


describe("visiting exampple page",()=>{
    it('testing quaring list',()=>{
        cy.visit('https://example.cypress.io/')
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)')
        cy.get('ul.home-list>li').should('have.length',19)
        cy.get('div.homelist>ul>li>a')
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(2) > a')
    })
})