import ClientPage from "../../support/page_object/clientPage";

const clientPage = new ClientPage()

describe('Client', () => {
    it('client page ', function () {
        cy.login().wait(1000).visit('/client')
        //cy.navbar()
        clientPage.title().should('be.visible')
        clientPage.fieldSearch().should('be.visible').type('tratata')
        clientPage.iconClear().click().wait(500)
        clientPage.btnCreate().contains('Create Client').click().wait(500)
    });
})
