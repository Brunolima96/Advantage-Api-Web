import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('O usuário está na página inicial do site Advantage Online Shopping', () => {

  cy.visit('https://advantageonlineshopping.com/#/')
  cy.viewport(1400, 950);
})

When('O usuário insere "laptop" no campo de pesquisa', () => {
  cy.wait(5000)
  cy.get('#searchSection', { timeout: 2000 }).click(); // Clica para abrir o campo de pesquisa
  cy.wait(3000)
  cy.get('#input', { timeout: 2000 }).type("Laptop"); // Seleciona o campo de pesquisa e digita "laptop"
});

When('O usuário clica no botão de busca', () => {
  cy.get('#menuSearch',).click(); // Executa a pesquisa
});

Then('O site deve exibir produtos relacionados a laptop', () => {
  cy.url().should('eq', 'https://advantageonlineshopping.com/#/search/?viewAll=Laptop')
  cy.get('div[data-ng-click="closeSearchForce()"]').click()
  cy.get('.categoryRight > ul li').eq(0).find('.productName', { timeout: 2000 }).should('include.text', 'Laptop')
})