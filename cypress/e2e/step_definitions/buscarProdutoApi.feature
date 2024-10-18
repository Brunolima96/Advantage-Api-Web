Feature: Pesquisa de produtos via GET

  Scenario: Procure por um produto
    Given que o usuário faz uma requisição GET para a API de busca de produtos
    When o usuário busca pelo produto
    Then a API deve retornar status 200
