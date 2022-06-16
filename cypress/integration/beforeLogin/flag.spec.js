import ModalClient from '../../support/page_object/modalClient';
import ClientPage from '../../support/page_object/clientPage';

const modalClient = new ModalClient();
const clientPage = new ClientPage();

describe('Flag', () => {
  it('flag code of country ', function () {
    const countryArray = [];
    cy.login()
      .wait(1000)
      .visit('/client');
    clientPage
      .btnCreate()
      .click()
      .wait(500);
    modalClient
      .iconHidden()
      .should('be.visible');
    modalClient
      .fieldFirstName()
      .type('Olha');
    modalClient
      .fieldLastName()
      .type('Bower');
    modalClient
      .fieldCompany()
      .type('Coca-Cola');
    modalClient
      .fieldEmail()
      .type('olha@i.us');
    //modalClient.selectCountryCode('United States')

    cy.get(
      'button[aria-label="Select country"]'
    ).click();
    cy.get('ul[role="menu"]')
      .children()
      .each((el) => {
        let fullCountryName =
          el[0].innerText.split(
            '\n'
          )[0];
        let countryCode =
          el[0].innerText.split(
            '\n'
          )[1];
        let shortCountryName =
          el[0].dataset.countryCode;
        //console.log({shortCountryName,fullCountryName,countryCode})
        countryArray.push({
          shortCountryName,
          fullCountryName,
          countryCode,
        });

        /*console.log(fullCountryName)
console.log(el[0].dataset.countryCode)
console.log(el[0].innerText.split('\n'))*/
      });
    console.log(countryArray);
    cy.writeFile(
      'flag.json',
      countryArray
    );
  });
});
