export default class NavigationPage {
    logo = () => cy.get('#logo')
    // clientsTopMenu = () => cy.get('[href="/client"]');
    // ordersTopMenu = () => cy.get('[href="/order"]');
    // estimatesTopMenu = () => cy.get('[href="/estimate"]');
    // invoicesTopMenu = () => cy.get('[href="/invoice"]');
    // paymentsTopMenu = () => cy.get('[href="/payment"]');
    // scheduleTopMenu = () => cy.get('[href="/schedule/calendar"]');

    navBarHunburger = () => cy.get('[class="ant-dropdown-trigger ant-dropdown-link pointer item"]');
    humburgerList = () => cy.get('ul[role="menu"]')

    humburgerMenuOpen = (page) => {
        this.navBarHunburger().click()
        const listOfLinks = ['Workers', 'Address', 'Vendors', 'Products', 'Purchase Orders', 'Absences'];
        for (let i = 0; i < listOfLinks.length; i++) {
            this.humburgerList().contains(listOfLinks[i])
        }
        this.humburgerList().contains(page).click()
    }
    iconInfo = () => cy.get('[alt="Search"]');
    iconDocs = () => cy.get('[alt="Docs"]');
    iconSettings = () => cy.get('[data-qa="settings-icon"]');
    iconBell = () => cy.get('[data-testid="NotificationsNoneIcon"]');
    iconClose = () => cy.get('[data-testid="CloseIcon"]')

    iconUserDrop = () => cy.get('[data-qa="userInfoName"]')
    dropProfile = () => cy.get('[data-qa="profile"]')
    dropCompanyAccount = () => cy.get('li[data-qa="settings"]')
    dropLogout = () => cy.get('[data-qa="logout"]')

}