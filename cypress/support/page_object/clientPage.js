export  default class ClientPage{


    title= () => cy.get('[data-qa="page-title"]');
    fieldSearch = () => cy.get('#search');
    iconClear = () => cy.get('[data-testid="ClearIcon"]')
    btnCreate = () => cy.get('[data-qa="create-client-button"]');
}