import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário tem um produto no carrinho', ()=>{
    cy.viewport(1400, 950);
    cy.visit('https://advantageonlineshopping.com/#/')
    cy.wait(5000)
    cy.get('#searchSection',{timeout:2000}).click();
    cy.wait(3000)
    cy.get('#input',{timeout:2000}).type("HP ELITEPAD 1000 G2 TABLET");
    cy.get('#menuSearch').click()
    cy.wait(5000)
    cy.get('div[data-ng-click="closeSearchForce()"]').click()
    cy.get('.categoryRight > ul li').click()
    cy.contains('button','ADD TO CART',{timeout:3000}).click()
     
    
})

When('o usuário acessa a tela de pagamento', () => {
    
    cy.wait(2000)
    cy.get('#shoppingCartLink').click()
    cy.wait(2000)
    cy.get('#checkOutButton').click()


  });



Then('o site deve exibir o produto correto e o valor total',()=>{
    
    cy.contains('h3','ORDER PAYMENT').should('be.visible')
    cy.contains('#toolTipCart .ng-binding','HP ELITEPAD 1000 G2 TABLET').should('be.visible')
    cy.contains('#toolTipCart .price','$1,009.00').should('be.visible')
    cy.contains('span','$1,009.00').should('be.visible')
    
})