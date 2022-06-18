import LocalCommands from '../../support/page_object/localCommands';
import BasePage from '../../support/page_object/beforeLoginPOM/basePage';
import RegistrationPage from '../../support/page_object/beforeLoginPOM/registrationPage';
const basePage = new BasePage();
const registrationPage = new RegistrationPage();
const localCommands = new LocalCommands()

describe('Nav Bar', function () {
  beforeEach('Load base page', () => {
    cy.visit('/').location('pathname').should('eq', '/');
  });
  it('Nav Bar menu with local helper', () => {
localCommands.navigationIntrodactingPage()
  })
  
    //each
    /*const countTopMenu = [];
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
*/
  it('countLogo', () => {
    const countLogo = [];
    cy.get('div#top-menu').prev().children().should('have.length', 1);
  });
  it('countRegisterButton', () => {
    const countRegisterButton = [];
    cy.get('a[href="/user/register"]').should('have.length', 7);
  });
});
