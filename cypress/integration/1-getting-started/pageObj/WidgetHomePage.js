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
         return cy.get('div.react-datepicker__day')
    }
}
export default WidgetHomePage