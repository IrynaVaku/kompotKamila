import BasePage from "../support/page_object/basePage";
import RegistrationPage from "../support/page_object/registrationPage";
const basePage = new BasePage();
const registrationPage = new RegistrationPage()

describe('Nav Bar', function () {
    beforeEach('Load base page', () =>{
        cy.visit('/').location('pathname').should('eq', '/')
    })
    it( 'Logo', function () {
        basePage.logo()
            .should('be.visible')
            .should('have.text', 'Kompot')
            .click()
            .location('pathname')
            .should('eq', '/')
    })
    it('Top menu', () =>{
        const topMenu = ['Pricing', 'Industries', 'Support']
          topMenu.forEach(el => cy.get(`[href="/i/${el.toLowerCase()}"]`)
              .should('be.visible')
              .should('have.text', `${el}`).click()
              .location('pathname')
              .should('eq', `/i/${el.toLowerCase()}`)
              .wait(200).go('back'))
    })
    it( 'Test', () =>{
        const test = []  
        cy.get('div#top-menu>div').each((el)=>{
            //console.log(el)
            test.push(el.text())
            test.push(el.html())
        })
        console.log(test)
        //test.length
        console.log(test.length/2)
        //.should('eq', 3)
    })

/*describe.skip('Base Page', () =>{
    it('Registration Button', () =>{
        cy.visit('/')
        basePage.logo().contains('Kompot')
        basePage.btnRegistration().click()
        registrationPage.headerRegistration().should('be.visible', 'Start your free 14-day trial with Kompot')

    })
})
    describe.skip('Base Page', () =>{
        it('Login Button', () =>{
            cy.visit('/')
            basePage.btnLogin().click()
            loginPage.headerLogin().should('be.visible', 'Welcome back!')

        })*/
})

