/// <reference types="Cypress" /> 

//const { find } = require("cypress/types/lodash")

describe('ToolsQa Practice WebElements', function(){
    beforeEach(function(){
        cy.log("Before start test case")
        cy.visit('https://demoqa.com/elements')
    })
    it('TextBox interaction', function(){
        //esperar que este visible el elemento
        cy.get('.col-md-6', { timeout: 1000 }).should('be.visible');
        //click en panel de texto lado izquierdo
        cy.get('#item-0').click()
        //Agregar la info del textForm
        cy.get('#userName').click().type('Camilo')
        cy.get('#userEmail').click().type('test@yopmail.com')
        cy.get('#currentAddress').click().type('ElCamino0123')
        cy.get('#permanentAddress').click().type('Loquevenga0123')
        //Click en Submit
        cy.get('#submit').click()
        //Convirtiendo un elemento en alias para después hacer assertion 
        //y ver si el resultado se mostro en pantalla
        cy.get('.border').as('RespuestaForm')
        cy.get('@RespuestaForm').should('be.visible').should('have.length',1)
       
        /*para que solo busque elementos visibles en el DOM
        cy.get('.product:visible').should('have.length',4)
        //Video 19 otra forma de buscar elementos
        //para que busque elementos basados en el parent products > [product,product,product]
        cy.get('.products').find('.product').should('have.length',4)
        //para dar click en un elemento que se encuentra repetido y no se tiene forma de diferenciarlo
        //se guarda en un contenedor los repetidos y se le dice a cual dar click, basado en el texto
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()*/     
    })
    it('CheckBox interaction', function(){
        //select menu from left panel
        cy.get('#item-1').click()
        //Expand menu options
        cy.get('.rct-icon-expand-close').click()
        //select second element, when the element it's repetitive you need to add them with []
        // and with the eq() you mention wich repetitive element need to interact
        cy.get('[class=rct-checkbox]').eq(2).click()


    })
    it('Radiobutton interaction', function(){
        //select menu from left panel
        cy.get('#item-2').click()
        //Radio button: Yes
        cy.get('label[for="yesRadio"]').click()
        cy.get('.text-success').should('be.visible').contains('Yes')
        cy.get('label[for="impressiveRadio"]').click()
        cy.get('.text-success').should('be.visible').contains('Impressive')
        
    })
    it('WebTables interaction', function(){
        //select menu from left panel
        cy.get('#item-3').click()
        //editing record
        cy.get('#edit-record-1').click()
        cy.get('#registration-form-modal', { timeout: 500}).should('be.visible').contains('Registration Form')
        cy.get('#firstName').clear().type('Yoguisito')
        cy.get('#lastName').clear().type('Fuentes')
        cy.get('#age').clear().type('40')
        cy.get('#salary').clear().type('200000')
        cy.get('#submit').click()
        cy.get('[class=rt-td]').first().contains('Yoguisito')
        //adding new record
        cy.get('#addNewRecordButton').click()
        cy.get('#registration-form-modal', { timeout: 5000}).should('be.visible').contains('Registration Form')
        cy.get('#firstName').clear().type('Voncha')
        cy.get('#lastName').clear().type('Fuentes')
        cy.get('#userEmail').type('voncha@gmail.com')
        cy.get('#age').clear().type('33')
        cy.get('#salary').clear().type('18000000')
        cy.get('#department').clear().type('Security')
        cy.get('#submit').click()
        cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').contains('Voncha')
        //search a record
        cy.get('#searchBox').type('Fuentes')
    
    })
    it('Buttons interaction', function(){
        //select menu from left panel
        cy.get('#item-4').click()
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage').should('be.visible').contains('You have done a double click')
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage').should('be.visible').contains('You have done a right click')
        
    })
})