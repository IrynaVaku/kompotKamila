import LocalCommands from '../../support/page_object/localCommands';
import PricingPage from '../../support/page_object/beforeLoginPOM/pricingPage';

const localCommands = new LocalCommands();
const pricingPage = new PricingPage();

describe('Pricing Page', () => {
  beforeEach('Load Pricing Page', () => {
    cy.visit('/').location('pathname').should('eq', '/');
    cy.get('a[href="/i/pricing"]').click();
  });
  it('Nav Bar menu with local helper', () => {
    localCommands.navigationIntrodactingPage();
  });
  it('Header Block exist on the page', () => {
    pricingPage.headerBlockExist();
  });
  it('Button exist on the page', () => {
    pricingPage.buttonsStartExist();
  });
});
