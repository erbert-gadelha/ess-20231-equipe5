Feature: Obras melhor avaliadas
  As a usuário
  I want to ver as obras mais bem avaliadas
  So I can ver as obras que são mais populares

  Scenario: Acessando página dos mais bem avaliadas
    Given o usuário está na página "/"
    When o usuário pressionar o botão "link-most-rated"
    Then o usuário deve ser redirecionado para a página "/mais-bem-avaliados"


  Scenario: Vizualizando em ordem decrescente
    Given o usuário está na página "/mais-bem-avaliados"
    When o usuário selecionar a opção "Do maior para o menor" no campo "selector-order"
    Then o usuário deve ver os items de "list-most-rated" organizados pelo campo "item-value" em ordem "decrescente"
  
  
  Scenario: Vizualizando em ordem decrescente
    Given o usuário está na página "/mais-bem-avaliados"
    When o usuário selecionar a opção "Do menor para o maior" no campo "selector-order"
    Then o usuário deve ver os items de "list-most-rated" organizados pelo campo "item-value" em ordem "crescente"
