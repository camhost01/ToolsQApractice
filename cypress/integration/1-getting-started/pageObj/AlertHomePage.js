class AlertHomePage
{
    getLeftoptionAlerts()
    {
        return cy.get('.text',{timeout:200}).contains('Alerts')
    }
    getAlertbutton()
    {
       return cy.get('#alertButton').click()  
        
    }
    getConfirmbutton()
    {
        return cy.get('#confirmButton').click()
    }
    getleftoptionWindow()
    {
        cy.get('.text',{timeout:200}).contains('Browser Windows')
    }
    openNewWindow()
    {
        cy.get('#windowButton').invoke('removeAttr','target')
    }
}
export default AlertHomePage