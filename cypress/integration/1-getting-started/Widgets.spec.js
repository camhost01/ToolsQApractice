/// <reference types="Cypress" /> 


//const { find } = require("cypress/types/lodash")

describe('ToolsQa Practice WidgetsElements', function(){
    beforeEach(function(){
        cy.log("Antes de ejecutar el caso de prueba")
        cy.visit('https://demoqa.com/widgets')
    })
    it('Accordian Interaction', function(){
        //Selecciona la sección del panel izquierdo
        cy.get('.text',{timeout:200}).contains('Accordian').click()
        //Verifica los textos del accordeon desplegado
        cy.get('#section1Heading').should('contain.text','What is Lorem Ipsum?')
        cy.get('#section1Content').should('contain.text','Lorem Ipsum is simply dummy text')
        //Verifica los textos del siguiente accordeon
        cy.get('#section2Heading').click().should('contain.text','Where does it come from?')
        //se valida que el anterior texto de acordeon no se muestre
        cy.get('#section1Content').should('not.be.visible')
        cy.get('#section2Content').should('contain.text','from a Lorem Ipsum passage, and going through the cites')
        
    })
    it('AutoComplete TextBox Interaction', function(){
        //Selecciona la sección del panel izquierdo
        cy.get('.text',{timeout:200}).contains('Auto Complete').click()
        //mapea el objeto a autocompletar
        cy.get('#autoCompleteMultipleContainer').type('r')

        cy.get('.auto-complete__menu').each(($v1,index,$list)=>
        {
            if($v1.text()==="Red")
            {
                $v1.trigger.click()
                //$v1.on('click',fn)
            }

        })
        
    })
})