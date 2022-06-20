import ModalClient from '../../support/page_object/modalClient';
import ClientPage from '../../support/page_object/clientPage';
const modalClient = new ModalClient();
const clientPage = new ClientPage();

describe('Create Client modal first2', () => {
  it('modal client page ', function () {
    cy.modalClientCreate();
    // modalClient.btnCancel().contains('Cancel').click()
    // cy.login().wait(1000).visit('/client')
    // clientPage.btnCreate().contains('Create Client').click()

    cy.login().wait(1000).visit('/client');
    clientPage.btnCreate().click().wait(500);
    modalClient.btnCancel().contains('Cancel').click();
  });
});
