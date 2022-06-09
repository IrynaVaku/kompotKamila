import BasePage from "../support/page_object/basePage";
import RegistrationPage from "../support/page_object/registrationPage";
const basePage = new BasePage();
const registrationPage = new RegistrationPage()

describe('Base Page', () =>{
    it('Registration Button', () =>{
        cy.visit('/')
        basePage.btnRegistration().click()
        registrationPage.headerRegistration().should('be.visible', 'Start your free 14-day trial with Kompot')

    })
})
    describe('Base Page', () =>{
        it('Login Button', () =>{
            cy.visit('/')
            basePage.btnLogin().click()
            loginPage.headerLogin().should('be.visible', 'Welcome back!')

        })
})

