import ProfilePage from "../../support/page_object/profilePage";
import ClientPage from "../../support/page_object/clientPage";
import ModalClient from "../../support/page_object/modalClient";

const clientPage = new ClientPage()
const profilePage = new ProfilePage()
const modalClient = new ModalClient()

describe('Profile', () => {
    it('profile page ', function () {
        cy.login().wait(2000).visit('/client')
        profilePage.lastClient().first().click()
        cy.url()
        // cy.navbar()
        const iconSideBar = ['ContentPasteOutlinedIcon', 'DescriptionOutlinedIcon',
            'ListAltOutlinedIcon', 'ReceiptLongOutlinedIcon', 'LocalPhoneOutlinedIcon',
             'FilePresentOutlinedIcon', 'Inventory2OutlinedIcon', 'MapsHomeWorkOutlinedIcon']

        iconSideBar.forEach(el => cy.get(`[data-testid="${el}"]`).first()
            .should('be.visible').click()
            .url().go('back'))

        const leftSideBar = ['Orders', 'Estimates', 'Payments', 'Calls', 'Messages',
            'Attachments', 'Purchase Orders', 'Notes', 'Tasks', 'Addresses']
        leftSideBar.forEach(el => cy.get(`[data-qa="${el.toLowerCase()}"]`).first()
            .should('be.visible').click().contains(`${el}`)
            .wait(2000).go('back'))
        profilePage.titleClient().should('be.visible')
        profilePage.penEditClient().should('be.visible').click()
        modalClient.fieldCompany().clear().type('Pepsi-Cola')
        modalClient.fieldPhone().clear().type(12457825871)
        modalClient.btnSave().click()
        profilePage.penEditDefaultAddress().should('be.visible').click()
        modalClient.fieldUnit().clear().type(548)
        modalClient.fieldZipCode().clear().type(95720)
        modalClient.btnCancel().contains('Save').click()
    })
})