/// <reference types="Cypress" /> 

import eComerceHomePage from "./pageObj/eComerceHomePage"

var ecHP = new eComerceHomePage()

describe('Ecommerce Practice Page', function(){
    beforeEach(function(){
        cy.log("Before start test case")
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        cy.visit('https://www.demoblaze.com/index.html')
    })
    it('Select categories', function(){
        //validate if you are in correct page
        cy.title().should('eq','STORE')
        //validate if user is able to select the categories
        ecHP.categoryPhone().should('be.visible')
        ecHP.categoryMonitor().should('be.visible')
        ecHP.categoryLaptop().should('be.visible')
        //Selecting Monitor option
        ecHP.categorySelection(3).click() //class is repeated 3 times, adding eq() we can select wich one
        //Selecting Laptop option
        ecHP.categorySelection(2).click() //class is repeated 3 times, adding eq() we can select wich one
         //Selecting Phone option
        ecHP.categorySelection(1).click() //class is repeated 3 times, adding eq() we can select wich one
    })
})

