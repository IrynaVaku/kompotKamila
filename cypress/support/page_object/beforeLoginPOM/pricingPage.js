export default class PricingPage {
  headerPricing = () => cy.get('div[class="container pt-5"]>h1');
  headerBlockName = () => cy.get('[class="card-header"]');
  btnStart = () => cy.get('[class*="ant-btn "]');

  headerBlockExist() {
    let text = ['Free', 'Pro', 'Enterprise'];
    this.headerBlockName().each((el, index) => {
      expect(Cypress.$(el).text()).include(text[index]);
    });
  }
  buttonsStartExist() {
    let button = ['Start', 'Start 14 day trial', 'Start 14 day trial'];
    this.btnStart().each((el, index) => {
      expect(Cypress.$(el).text()).include(button[index]);
    });
  }
}
