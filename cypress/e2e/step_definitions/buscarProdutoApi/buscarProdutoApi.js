import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

const nomeProduto = 'Beats Studio 2 Over-Ear Matte Black Headphones'

Given('que o usuário faz uma requisição GET para a API de busca de produtos', () => {

  cy.request({
    method: 'GET',
    url: `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${nomeProduto}&quantityPerEachCategory=10`,
  }).as('response');
});

When('o usuário busca pelo produto', () => {
  cy.get('@response').then(res => {
    console.log(res.body[0].products[0])
    expect(res.body[0].products[0].productName).to.equal(nomeProduto)
  })
});

Then('a API deve retornar status 200', () => {
  cy.get('@response').then(res => {
    expect(res.status).to.equal(200)
  });
});
