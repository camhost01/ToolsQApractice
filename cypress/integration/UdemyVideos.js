/// <reference types="Cypress" /> 

//const { find } = require("cypress/types/lodash")

describe('Udemy Course Vid', function(){
    beforeEach(function(){
        cy.log("Antes de ejecutar el caso de prueba")
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })
    it('Vid 17 Handling invisible Elements', function(){
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        //para que solo busque elementos visibles en el DOM
        cy.get('.product:visible').should('have.length',4)
        //Video 19 otra forma de buscar elementos
        //para que busque elementos basados en el parent products > [product,product,product]
        cy.get('.products').find('.product').should('have.length',4)
        //para dar click en un elemento que se encuentra repetido y no se tiene forma de diferenciarlo
        //se guarda en un contenedor los repetidos y se le dice a cual dar click, basado en el texto
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })

})