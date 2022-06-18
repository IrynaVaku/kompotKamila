// ***********************************************
import RegistrationPage from './page_object/beforeLoginPOM/registrationPage';
import LoginPage from './page_object/beforeLoginPOM/loginPage';
import NavigationPage from './page_object/navigationPage';
import ClientPage from './page_object/clientPage';
import ModalClient from './page_object/modalClient';

const registrationPage = new RegistrationPage();
const loginPage = new LoginPage();
const navigationPage = new NavigationPage();
const clientPage = new ClientPage();
const modalClient = new ModalClient();

Cypress.Commands.add('registration', () => {
  cy.visit('/user/register');
  registrationPage.emailField().type('test22@gmail.com');
  registrationPage.passwordField().type('Qwerty123');
  registrationPage.createBtn().click();
  registrationPage.fullNameField().type('Boris');
  registrationPage.phoneNumber().type(2345678876);
  registrationPage.createBtn().click();
  registrationPage.companyField().type('Happy');
  registrationPage.primaryIndustryField().type('JH');
  registrationPage.companySizeSelected('Only me');
  registrationPage.createBtn().click();
});
Cypress.Commands.add('login', () => {
  cy.visit('/user/login');
  loginPage.emailField().type('test22@gmail.com');
  loginPage.passwordField().type('Qwerty123');
  loginPage.loginBtn().click().wait(1000);
});

Cypress.Commands.add('navbar', () => {
  const topMenu = [
    'Client',
    'Order',
    'Estimate',
    'Invoice',
    'Payment',
    'Schedule',
  ];
  topMenu.forEach((el) =>
    cy
      .get(`[href*="/${el.toLowerCase()}"]`)
      .should('be.visible')
      .contains(`${el}`)
      .click()
      .wait(2000)
      .go('back')
  );

  // navigationPage.humburgerMenuOpen('Address')
  navigationPage.iconInfo().should('be.visible').click().wait(2000);
  navigationPage.iconDocs().should('be.visible').click().wait(2000).go('back');
  navigationPage
    .iconSettings()
    .should('be.visible')
    .click()
    .wait(2000)
    .go('back');
  navigationPage.iconBell().should('be.visible').click().wait(2000).go('back');
  navigationPage.iconClose().click().wait(500);
  navigationPage.iconUserDrop().should('be.visible').click().wait(2000);
  navigationPage
    .dropProfile()
    .should('be.visible')
    .wait(2000)
    .click()
    .wait(2000)
    .visit('/');
  navigationPage.iconUserDrop().should('be.visible').click().wait(2000);
  navigationPage
    .dropCompanyAccount()
    .should('be.visible')
    .wait(2000)
    .click()
    .wait(2000)
    .visit('/');
  navigationPage.iconUserDrop().should('be.visible').click().wait(2000);
  navigationPage.dropLogout().should('be.visible').click().wait(2000);
  cy.login();
});
Cypress.Commands.add('modalClientCreate', () => {
  //cy.visit('/client')
  cy.login().wait(1000).visit('/client');
  clientPage.btnCreate().click().wait(500);
  modalClient.iconHidden().should('be.visible');
  modalClient.fieldFirstName().type('Olha');
  modalClient.fieldLastName().type('Bower');
  modalClient.fieldCompany().type('Coca-Cola');
  modalClient.fieldEmail().type('olha@i.us');
  modalClient.selectCountryCode('United States');
  modalClient.fieldPhone().type(12345678591);
  modalClient.fieldExt().type(123);
  modalClient.fieldAddress().type('California');
  modalClient.fieldUnit().type(523);
  modalClient.fieldCity().type('San Diego');
  modalClient.fieldSelectState().click();
  modalClient.stateSelected('California');
  modalClient.fieldZipCode().type(95612);
  modalClient.btnSave().contains('Save').click({ force: true });
});
