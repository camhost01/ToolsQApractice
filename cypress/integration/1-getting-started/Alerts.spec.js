/// <reference types="Cypress" /> 
/// <reference types="cypress-iframe" /> 
import 'cypress-iframe'

const { delay } = require("bluebird")

//const { find } = require("cypress/types/lodash")

describe('ToolsQa Practice Alerts', function(){
    beforeEach(function(){
        cy.log("Antes de ejecutar el caso de prueba")
        //para el caso de iframe
        //cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.visit('https://demoqa.com/alertsWindows')
    })

    it('Alerts interaction', function(){
        //click en panel de lado izquierdo
        cy.get('.text',{timeout:200}).contains('Alerts').click()
        //Click en boton de Alerta
        cy.get('#alertButton').click()  
        cy.get('#confirmButton').click() 
        /*Cypress auto acepta las alertas, para validar por ejemplo el texto dentro de la alerta se debe hacer uso 
        de los eventos del navegador, para alertas window:alert, para botones de confirmar window:confirm
        */
        cy.on('window:alert',(str)=>
       {
           //Valor que se que aparece en el alert vs valor que se guarda en "str"
           expect(str).to.equal('You clicked a button')
       })
       //Window confirm ejemplo
       cy.on('window:confirm',(str)=>
       {
           //Valor que se que aparece en el alert vs valor que se guarda en "str"
           expect(str).to.equal('Do you confirm action?')
       })
        /*
        Al colocar estos dos comandos al mismo tiempo solo ejecuta el primero de manera correcta, posteriormente no tiene en cuenta ni el nuevo click ni 
        el tiempo de 6 segundos, realiza la validación inmediatamente
       //Boton se oprime y accion 5 segundos después
       cy.get('#timerAlertButton').click()
       cy.wait(6000)
       cy.on('window:alert',(str)=>
        {
            //Valor que se que aparece en el alert vs valor que se guarda en "str"
            expect(str).to.equal('This alert appeared after 5 seconds')
        })
       */
    })
    it('Windows interaction', function(){
        //click en panel de lado izquierdo
        cy.get('.text',{timeout:200}).contains('Browser Windows').click()
        //Click en boton nueva página
        /*
        Cypress no esta diseñado para manejar child windows, por lo tanto todo se debe trabajar en la misma página
        Si se requiere de continuar un proceso en una página nueva, la solución que se plantea es buscar en el botón que abre la nueva página
        la propiedad "target" y debe decir _blank, si esta la tiene se utiliza el siguiente comando para remover la propiedad que abra en 
        una página nueva y continue en la actual
        cy.get('id o clase del botón que abre la nueva pagina').invoke('removeAttr','target').click()
        */
        cy.get('#windowButton').invoke('removeAttr','target').click()

        
    })
    /*it('Iframe interaction', function(){
        
        //dandole a conocer a cypress que existe un iframe en el DOM con el id del iFrame
        cy.frameLoaded('#courses-iframe')
        //Ya dentro del iframe se procede a buscar el elemento con iframe().find()
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
    })*/
})