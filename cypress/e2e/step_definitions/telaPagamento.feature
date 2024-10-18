Feature: Validar produtos no carrinho

  Scenario: Verificar se o produto adicionado está no carrinho na tela de pagamento
    Given que o usuário tem um produto no carrinho
    When o usuário acessa a tela de pagamento
    Then o site deve exibir o produto correto e o valor total