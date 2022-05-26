class ecommerceHP
{
    categoryPhone()
    {
        return cy.get(".list-group-item").should('contain.text','Phones')
    }
    categoryLaptop()
    {
        return cy.get(".list-group-item").should('contain.text','Laptops')
    }
    categoryMonitor()
    {
        return cy.get(".list-group-item").should('contain.text','Monitors')
    }
    phoneSelection(value)
    {
        return cy.get(".col-lg-4").eq(value)
    }
    categorySelection(value)
    {
        return cy.get('.list-group-item').eq(value)
    }
}
export default ecommerceHP