


const home_page = 'https://www.demoblaze.com/index.html'
describe('Homepage Test Cases', () => {
  beforeEach(()=>{
    cy.viewport(1000,660)
    cy.visit(home_page)

  })
  it('TC-HOME-001: Verify that user can browse the hompage and see 9 items as the product list', () => {
    cy.get('div.card.h-100').should('have.length',9).each($el =>{
     let block =  cy.wrap($el).find("div.card-block")
    //  block.find("h4")
    //  block.find("h5")
    //  block.find("p")
    cy.wrap($el).find('h4').should('have.class','card-title')
    // cy.get('div.card.h-100').find("h4")
    // cy.get("div.card-block").find('h4')
    cy.wrap($el).find('h5').wait(100)
    cy.wrap($el).find('p').should("have.id","article").and("contain.text",".")
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').should("have.text","Samsung galaxy s6")
     
    })
   
    
  })
  // it("TC-HOME-002, Verify that all the buttons under Categories tab is working and contains THREE different items",()=>{
  //   cy.get('.list-group').each($al=>{
  //     cy.wrap($al).find('#itemc').should('have.length',4)
  //   })
  // })
  it("TC-HOME-003,verify that home carousal part is working",()=>{
    cy.get('.carousel-control-next-icon').click()

  })
  it('TC-HOME-004	, Verify the footer of Homepage',()=>{
    cy.get('#footc').find('p').should("contain",'believe')
    // cy.get('.py-5').should("have.class",".py-5")
  })
  it("TC-HOME-005	Verify that user can click the phones button under the categories and there should be 7 items.",()=>{

    let item = cy.get("#itemc").should('have.text','Phones').click()
    cy.get('div.card.h-100').should("have.length",7)
    
  })
  // it('TC-HOME-006	Verify that the laptops tab button is working from the categories section',()=>{
   
  //   cy.get('[onclick="byCat("notebook")"]')
   
  //   // cy.get('[onclick="byCat('notebook')"]')
    

  // })
 
})
