export default class BasePage {
  btnLogin = () => cy.get('[data-qa="login"]');
  href = 'i/pricing';
  btnRegistration = () => cy.get('[data-qa="register"]');
  logo = () => cy.get('span#logo');
}
