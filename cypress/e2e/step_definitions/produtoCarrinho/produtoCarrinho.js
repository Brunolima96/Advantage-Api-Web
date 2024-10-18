import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário busca por "headphones"', ()=>{
    cy.viewport(1400, 950);
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.wait(10000)
    cy.get('#searchSection',{timeout:2000}).click();
    cy.wait(3000)
    cy.get('#input',{timeout:2000}).type("HP ELITEPAD 1000 G2 TABLET");
    cy.get('#menuSearch').click()
    cy.get('div[data-ng-click="closeSearchForce()"]').click()
})

When('o usuário clica em um produto da lista', () => {
    
    cy.get('.categoryRight > ul li').click()

  });

When('o usuário clica no botão "Adicionar ao carrinho"', () => {
     cy.contains('button','ADD TO CART',{timeout:3000}).click()
     cy.wait(2000)
  });

Then('o produto deve ser adicionado ao carrinho com sucesso',()=>{
    cy.get('#shoppingCartLink').click()
    cy.contains('a > h3.ng-binding','HP ELITEPAD 1000 G2 TABLET')
    cy.contains('label','HP ELITEPAD 1000 G2 TABLET')
    cy.contains('h3','SHOPPING CART ').should('be.visible')
    
    
    
})