Feature: Navegação no site Advantage Online Shopping

  Scenario: O usuário acessa a página inicial
    Given O usuário está na página inicial do site Advantage Online Shopping
    When O usuário insere "laptop" no campo de pesquisa 
    When O usuário clica no botão de busca
    Then O site deve exibir produtos relacionados a laptop
