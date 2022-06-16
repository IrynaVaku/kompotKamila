import RegistrationPage from "../../support/page_object/beforeLoginPOM/registrationPage";

const registrationPage = new RegistrationPage()

describe('Registration', () => {
    it('registration with valid credentials', () =>{
        cy.registration()

    })
})