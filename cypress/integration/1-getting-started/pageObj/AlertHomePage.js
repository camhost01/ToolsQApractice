class AlertHomePage
{
    getLeftoptionAlerts()
    {
        return cy.get('.text',{timeout:200}).contains('Alerts')
    }
    getAlertbutton()
    {
       return cy.get('#alertButton')
    }
    getConfirmbutton()
    {
        return cy.get('#confirmButton')
    }
    getleftoptionWindow()
    {
        return cy.get('.text',{timeout:200}).contains('Browser Windows')
    }
    openNewWindow()
    {
        return cy.get('#windowButton')
    }
}
export default AlertHomePage