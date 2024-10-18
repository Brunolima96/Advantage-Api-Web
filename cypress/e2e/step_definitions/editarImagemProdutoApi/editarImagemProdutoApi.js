import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('que o usuário faz uma requisição Post para api de produtos', () => {
  cy.request({
    method: 'POST',
    url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/register',
    body: {
      "accountType": "ADMIN",
      "address": "Rua emilio, 200",
      "allowOffersPromotion": true,
      "aobUser": true,
      "cityName": "São Paulo",
      "country": "Brasil",
      "email": "bruno@hotmail.com",
      "firstName": "Bruno",
      "lastName": "Lima",
      "loginName": "BrunoLima",
      "password": "1234",
      "phoneNumber": "1234",
      "stateProvince": "SP",
      "zipcode": "09594-70"
    },
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    console.log(res.body)
    const token = res.body.token
    const userid = res.body.userId
    const source = "gallery"
    const color = "blue"
    const productId = 2
    let fileContent;


    cy.fixture('stevejobs.jpg', 'binary').then(content => {

      fileContent = content; // Armazena o conteúdo da fixture na variável
    });

    cy.request({
      method: 'POST',
      url: `https://www.advantageonlineshopping.com/catalog/api/v1/product/image/${userid}/${source}/${color}`,
      body: {
        file: Cypress.Blob.binaryStringToBlob(fileContent, 'image/jpeg'),
        product_id: productId
      },
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).as('@response')
  })


})


When('edita a imagem do produto', () => {
  cy.get('@response').then(res => {

    expect(res.body.imageId).to.exist;
    expect(res.body.imageId).to.not.be.null;
    expect(res.body.success).to.be.true;

  })
});

Then('a API deve retornar status 201', () => {
  cy.get('@response').then(res => {
    expect(res.status).to.equal(201)
  });
});