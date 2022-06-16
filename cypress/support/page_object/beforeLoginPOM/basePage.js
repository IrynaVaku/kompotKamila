export default class BasePage {
  btnLogin = () => cy.get('[data-qa="login"]');
  href = 'i/pricing';
  btnRegister = () => cy.get('[data-qa="register"]');
  logo = () => cy.get('span#logo');
}
