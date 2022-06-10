export default class ModalClient{

    iconHidden = () => cy.get('[data-testid="CloseIcon"]')
    fieldFirstName = () => cy.get('#firstName')
    fieldLastName = () => cy.get('#lastName')
    fieldCompany = () => cy.get('#company')
    fieldEmail = () => cy.get('#email')
    fieldPhone = () => cy.get('#phone')
    flagChangeCountry = () => cy.get('button[aria-label="Select country"]')
    fieldExt = () => cy.get('#ext')
    fieldAddress  = () => cy.get('#addressLine1')
    fieldUnit  = () => cy.get('#addressLine2')
    fieldCity  = () => cy.get('#city')
    fieldZipCode  = () => cy.get('input#zipCode')
    btnSave = () => cy.get('button[type="submit"]')
    btnCancel = () => cy.get('button[type="button"]')

    selectCountryCode (country) {
      this.flagChangeCountry().wait(500).click()
      cy.get('span.country-name').contains(country).scrollIntoView().click()
    }


    fieldSelectState  = () => cy.get('[qa_id="SelectStateInput"]').parent().parent()
    listOfStates = () => cy.get('ul[class="MuiList-root MuiList-padding MuiMenu-list css-r8u8y9"]')

    stateSelected = (state) => {
        this.fieldSelectState().click({force: true})

    const states = [
    'Alabama','Alaska','Arizona','Arkansas','California',
        'Colorado','Connecticut','Delaware','Florida','Georgia',
        'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas',
        'Kentucky','Louisiana','Maine','Maryland','Massachusetts',
        'Michigan','Minnesota','Mississippi','Missouri','Montana',
        'Nebraska','Nevada','New Hampshire','New Jersey','New Mexico',
        'New York','North Carolina','North Dakota','Ohio','Oklahoma',
        'Oregon', 'Pennsylvania','Rhode Island','South Carolina',
        'South Dakota', 'Tennessee', 'Texas','Utah','Vermont','Virginia',
        'Washington', 'West Virginia','Wisconsin','Wyoming'];
    for(let i = 0; i < states.length; i++){
    this.listOfStates().contains(states[i])
    }
    this.listOfStates().contains(state).click();
}
}