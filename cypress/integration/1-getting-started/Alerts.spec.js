/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" /> 
import 'cypress-iframe'
import AlertHomePage from './pageObj/AlertHomePage'

const { delay } = require("bluebird")
var alertHP = new AlertHomePage()

describe('ToolsQa Practice Alerts', function(){
    beforeEach(function(){
        cy.log("Before start test case")
        //If you want to check the Iframe test case need to remove the comments for next line and comment cy.visit('https://demoqa.com/alertsWindows')
        //also remove /* */ from Iframe interaction test case
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        cy.visit('https://demoqa.com/alertsWindows')
    })

    it('Alerts interaction', function(){
        //select menu from left panel
        alertHP.getLeftoptionAlerts().click()
        //Click on Alert button
        alertHP.getAlertbutton.click()  
        //Click on Confirm button
        alertHP.getConfirmbutton.click() 
        /*Cypress auto-accept alerts, if you need to validate a specific text from alert, need to use the event listener
         window:alert, confirm form window:confirm
        */
        cy.on('window:alert',(str)=>
       {
           //Text in alert is compare againts the value on object str
           expect(str).to.equal('You clicked a button')
       })
       //Window confirm ejemplo
       cy.on('window:confirm',(str)=>
       {
           //Text in confirm form is compare againts the value on object str
           expect(str).to.equal('Do you confirm action?')
       })
        /*
        If you need to wait after click in the button e.g. 5 sec
        cy.get('#timerAlertButton').click()
        cy.wait(6000)
        cy.on('window:alert',(str)=>
        {
            expect(str).to.equal('This alert appeared after 5 seconds')
        })
       */
    })
    it('Windows interaction', function(){
        //select menu from left panel
        alertHP.getleftoptionWindow().click()
        //Click en boton nueva página
        /*
        Cypress no esta diseñado para manejar child windows, por lo tanto todo se debe trabajar en la misma página
        Si se requiere de continuar un proceso en una página nueva, la solución que se plantea es buscar en el botón que abre la nueva página
        la propiedad "target" y debe decir _blank, si esta la tiene se utiliza el siguiente comando para remover la propiedad que abra en 
        una página nueva y continue en la actual
        cy.get('id o clase del botón que abre la nueva pagina').invoke('removeAttr','target').click()
        */
        alertHP.openNewWindow().click()
    })
    /*it('Iframe interaction', function(){
        
        //dandole a conocer a cypress que existe un iframe en el DOM con el id del iFrame
        cy.frameLoaded('#courses-iframe')
        //Ya dentro del iframe se procede a buscar el elemento con iframe().find()
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })*/
})