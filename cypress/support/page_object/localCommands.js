export default class LocalCommands{
  
  logo = () => cy.get('span#logo');
  topMenu = () => cy.get('div#top-menu');
  topButtonsMain = () => cy.get('div#top-menu').next();
  topMenuLinks = ['Pricing', 'Industries', 'Support']
  topButtons = [
    ['Log in', 'login'],
    ['Sign up', 'register']];


  navigationIntrodactingPage = () => {
   this.logo()
      .should('be.visible')
      .should('have.text', 'Kompot')
      .click()
      .location('pathname')
      .should('eq', '/');
    this.topMenu()
     .should('be.visible')
     .children()
     .should('have.length', 3);
    this.topMenuLinks.forEach((el) =>{
        cy.get(`a[href="/i/${el.toLowerCase()}"]`)
          .should('be.visible')
          .should('have.text', `${el}`)
          .click()
          .location('pathname')
          .should('eq', `/i/${el.toLowerCase()}`)
          .wait(200)
          .go('back');
    this.topButtonsMain()
          .should('be.visible')
          .children().should('have.length', 2);
    this.topButtons.forEach((el) => {
        cy.get(`[data-qa="${el[1]}"]`)
          .first().should('have.text', `${el[0]}`)
          .click().location('pathname')
          .should('eq', `/user/${el[1]}`)
          .wait(200).go('back');
    })
  })
}
}
