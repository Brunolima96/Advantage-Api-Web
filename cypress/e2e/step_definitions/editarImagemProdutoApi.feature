Feature: Atualize a imagem de um produto POST

  Scenario: editar imagem do produto
    Given que o usuário faz uma requisição Post para api de produtos
    When edita a imagem do produto
    Then a API deve retornar status 201