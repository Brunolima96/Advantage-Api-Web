
Feature: Adicionar produtos ao carrinho

  Scenario: Usuário incluir um produto ao carrinho
    Given que o usuário busca por "headphones"
    When o usuário clica em um produto da lista
    When o usuário clica no botão "Adicionar ao carrinho"
    Then o produto deve ser adicionado ao carrinho com sucesso