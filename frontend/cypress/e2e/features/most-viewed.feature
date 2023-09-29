Feature: Obras mais vistas
  As a usuário
  I want to ver as obras mais consumids
  So I can ver as obras que são mais populares


  Scenario: Acessando página dos mais vistos
    Given o usuário está na página "/"
    When o usuário pressionar o botão "link-most-viewed"
    Then o usuário deve ser redirecionado para a página "/mais-vistos"


  Scenario: Mais vistos do dia em ordem decrescente
    Given o usuário está na página "/mais-vistos"
    When o usuário selecionar a opção "Do maior para o menor" no campo "select-order"
    And o usuário selecionar a opção "Dia" no campo "select-period"
    Then o usuário deve ver os items de "list-most-viewed" organizados pelo campo "item-value" em ordem "decrescente"
    And existe um "anime-item" com os valores "Kimetsu no Yaiba" e "2 views"
    
    
  Scenario: Mais vistos da semana em ordem crescente
    Given o usuário está na página "/mais-vistos"
    When o usuário selecionar a opção "Do menor para o maior" no campo "select-order"
    And o usuário selecionar a opção "Semana" no campo "select-period"
    Then o usuário deve ver os items de "list-most-viewed" organizados pelo campo "item-value" em ordem "crescente"
    And existe um "anime-item" com os valores "Shingeki no Kyojin" e "0 views"

  Scenario: Mais vistos do ano em ordem decrescente
    Given o usuário está na página "/mais-vistos"
    When o usuário selecionar a opção "Do maior para o menor" no campo "select-order"
    And o usuário selecionar a opção "Ano" no campo "select-period"
    Then o usuário deve ver os items de "list-most-viewed" organizados pelo campo "item-value" em ordem "decrescente"
    And existe um "anime-item" com os valores "Naruto" e "269 views"
