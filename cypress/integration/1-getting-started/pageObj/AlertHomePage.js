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
    getIframe()
    {
        return cy.iframe('#frame1')
    }
    selectIframeOp()
    {
        return cy.get('span.text')
    }
}
export default AlertHomePage