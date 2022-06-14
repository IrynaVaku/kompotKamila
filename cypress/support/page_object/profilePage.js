export default class ProfilePage {

    lastClient = () => cy.get('a[href*="/client/"]')
    titleClient = () => cy.get('#clientDetails')
    penEditClient = () => cy.get('#clientDetails')
        .siblings().find('[data-testid="EditIcon"]')
    // editCompanyNameField = () => cy.get('#company')
    penEditDefaultAddress = () => cy.get('#clientAddress')
        .siblings().find('[data-testid="EditIcon"]')


// const array = [
//     ['Orders', 'ContentPasteOutlinedIcon'],
//     ['Estimates', 'DescriptionOutlinedIcon'],
//     ['Invoices', 'ListAltOutlinedIcon'],
//     ['Payments', 'ReceiptLongOutlinedIcon'],
//     ['Calls', 'LocalPhoneOutlinedIcon'],
//     ['Attachments', 'FilePresentOutlinedIcon'],
//     ['Tasks', 'FormatListNumberedOutlinedIcon'],
//     ['Notes', 'NoteAltOutlinedIcon'],
// ];
//
// array.forEach((e) => {
//     cy.get(`svg[data-testid="${e[1]}"]`)
//         .first()
//         .should('be.visible')
//         .click()
//         .url()
//         .should('contain', `#${e[0].toLowerCase()}`)
//         .go('back');
//     cy.get(`div[data-qa="${e[0].toLowerCase()}"]`)
//         .first()
//         .should('be.visible')
//         .click()
//         .url()
//         .should('contain', `#${e[0].toLowerCase()}`)
//         .go('back');
// });

}