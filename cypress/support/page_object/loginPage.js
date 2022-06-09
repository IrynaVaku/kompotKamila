export default class LoginPage{
    emailField = () =>  cy.get('#email')
    passwordField = () => cy.get('#password')
    loginBtn = () => cy.get('button[type=submit]')

}
