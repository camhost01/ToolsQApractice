class WidgetHomePage
{
    cllDatePickOption()
    {
        return cy.get('.text',{timeout:200}).contains('Date Picker')
    }
    displayDatePicker()
    {
        return cy.get('#datePickerMonthYearInput')
    }
    selectMonthDatePicker()
    {
        return cy.get('select.react-datepicker__month-select')
    }
    selectYearDatePicker()
    {
        return cy.get('select.react-datepicker__year-select')
    }
    selectDayDatePicker()
    {
         return cy.get('div.react-datepicker__day--009')
    }
    selectSliderOp()
    {
        return cy.get('span.text',{timeout:200}).contains('Slider')
    }
    getsliderOb()
    {
        return cy.get('input.range-slider')
    }
    selectProgressBOp()
    {
        return cy.get('span.text',{timeout:200}).contains('Progress Bar')
    }
    getStartProgressB()
    {
        return cy.get('#startStopButton')
    }
    getProgressBvalue()
    {
        return cy.get("div[aria-valuenow='50']",{timeout:5000})
    }
    selectToolTipOp()
    {
        return cy.get('span.text',{timeout:200}).contains('Tool Tips')
    }
    getToolTipBt()
    {
        return cy.get('button#toolTipButton')
    }
    getToolTiptext()
    {
        return cy.get('input#toolTipTextField')
    }
    getToolTiplink()
    {
        return cy.get("a[href='javascript:void(0)'").contains('Contrary')
    }
}
export default WidgetHomePage