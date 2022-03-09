/// <reference types="Cypress" /> 

import WidgetHomePage from "./pageObj/WidgetHomePage"

var widgtHP = new WidgetHomePage()
//const { find } = require("cypress/types/lodash")

describe('ToolsQa Practice WidgetsElements', function(){
    beforeEach(function(){
        cy.log("Before start test case")
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
        cy.visit('https://demoqa.com/widgets')
    })
    /*
    it('Accordian Interaction', function(){
        //Select option from left panel
        cy.get('.text',{timeout:200}).contains('Accordian').click()
        //validate the text correspondig to section displayed
        cy.get('#section1Heading').should('contain.text','What is Lorem Ipsum?')
        cy.get('#section1Content').should('contain.text','Lorem Ipsum is simply dummy text')
        //validate the text correspondig to section displayed
        cy.get('#section2Heading').click().should('contain.text','Where does it come from?')
        //validate if the previous text is not visible on the screen
        cy.get('#section1Content').should('not.be.visible')
        cy.get('#section2Content').should('contain.text','from a Lorem Ipsum passage, and going through the cites')
        
    })
    it('AutoComplete TextBox Interaction', function(){
        //Select option from left panel
        cy.get('.text',{timeout:200}).contains('Auto Complete').click()
        //mapping the opbjet to auto complete
        cy.get('#autoCompleteMultipleContainer').type('r')

        cy.get('.auto-complete__menu').each(($v1,index,$list)=>
        {
            if($v1.text()==="Red")
            {
                $v1.trigger.click()
            }

        })
        
    })
    */
    it('DatePicker Interaction',function()
    {
        //Select Option from Left Panel
        widgtHP.cllDatePickOption().click()
        //Click on field for display the datepicker
        widgtHP.displayDatePicker().click()
        //Selecting Month
        widgtHP.selectMonthDatePicker().select(this.data.DPMonth)
        //Selecting Year
        widgtHP.selectYearDatePicker().select(this.data.DPYear)
        //Select Day
        widgtHP.selectDayDatePicker().contains(this.data.DPDay).click()
    })
})