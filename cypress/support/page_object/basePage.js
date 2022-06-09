export  default class BasePage{

    btnLogin = () => cy.get('[data-qa="login"]');
    btnRegistration = () => cy.get('[data-qa="register"]');
    logoKompot= () => cy.get('#logo');
}