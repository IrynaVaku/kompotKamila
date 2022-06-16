import BasePage from '../../support/page_object/beforeLoginPOM/basePage';
import RegistrationPage from '../../support/page_object/registrationPage';
const basePage = new BasePage();
const registrationPage = new RegistrationPage();

describe('Nav Bar', function () {
  beforeEach('Load base page', () => {
    cy.visit('/').location('pathname').should('eq', '/');
  });
  it('Logo', function () {
    basePage
      .logo()
      .should('be.visible')
      .should('have.text', 'Kompot')
      .click()
      .location('pathname')
      .should('eq', '/');
  });
  it('Top menu', () => {
    const topMenu = ['Pricing', 'Industries', 'Support'];
    topMenu.forEach((el) =>
      cy
        .get(`[href="/i/${el.toLowerCase()}"]`)
        .should('be.visible')
        .should('have.text', `${el}`)
        .click()
        .location('pathname')
        .should('eq', `/i/${el.toLowerCase()}`)
        .wait(200)
        .go('back')
    );
  });
  it('border-button', () => {
    const borderButton = [
      ['Log in', 'login'],
      ['Sign up', 'register'],
    ];
    borderButton.forEach((el) =>
      cy
        .get(`[data-qa="${el[1]}"]`)
        .first()
        .should('have.text', `${el[0]}`)
        .click()
        .location('pathname')
        .should('eq', `/user/${el[1]}`)
        .wait(200)
        .go('back')
    );
  });
  it('countTopMenu', () => {
    cy.get('div#top-menu>div').should('have.length', 3);
    cy.get('div#top-menu').children().should('have.length', 3);
    //each
    const countTopMenu = [];
    let startCutting;
    let finishCutting;
    let endpoint;
    cy.get('div#top-menu>div').each((el) => {
      cy.log(el);
      startCutting = el[0].innerHTML.indexOf('"') + 1;
      finishCutting = el[0].innerHTML.lastIndexOf('"');
      endpoint = el[0].innerHTML.slice(startCutting, finishCutting);
      countTopMenu.push([el[0].innerText, endpoint]);
    });
    cy.log(countTopMenu);
  });

  it('countBorderButton', () => {
    const countBorderButton = [];
    cy.get('div#top-menu').next().children().should('have.length', 2);
    cy.get('[data-qa="login"]').siblings().should('have.length', 1);
    cy.get('[data-qa="login"]').parent().children().should('have.length', 2);
  });
  it('countLogo', () => {
    const countLogo = [];
    cy.get('div#top-menu').prev().children().should('have.length', 1);
  });
  it('countRegisterButton', () => {
    const countRegisterButton = [];
    cy.get('a[href="/user/register"]').should('have.length', 7);
  });
});
