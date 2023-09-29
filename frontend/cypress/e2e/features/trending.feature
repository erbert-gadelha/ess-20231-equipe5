Feature: Obras em alta
  As a usuário
  I want to ver as obras que estão em alta
  So I can ver as mais populares


  Scenario: Acessando página dos em alta
    Given o usuário está na página "/"
    When o usuário pressionar o botão "link-trending"
    Then o usuário deve ser redirecionado para a página "/emalta"


  Scenario: Vizualizando os resultados do dia
    Given o usuário está na página "/emalta"
    When o usuário pressionar o botão "button-trending-day"
    Then o usuário deve ver o componente "header-trending" contendo o valor "Em Alta no dia"
    And o anime "Naruto" tem o numero de visualizações "1"
  
  
  Scenario: Vizualizando os resultados da semana
    Given o usuário está na página "/emalta"
    When o usuário pressionar o botão "button-trending-week"
    Then o usuário deve ver o componente "header-trending" contendo o valor "Em Alta no semana"
    And o anime "Naruto" tem o numero de visualizações "12"


  Scenario: Vizualizando os resultados do trimestre
    Given o usuário está na página "/emalta"
    When o usuário pressionar o botão "button-trending-trimeter"
    Then o usuário deve ver o componente "header-trending" contendo o valor "Em Alta no trimestre"
    And o anime "Naruto" tem o numero de visualizações "96"


  Scenario: Vizualizando os resultados do ano
    Given o usuário está na página "/emalta"
    When o usuário pressionar o botão "button-trending-year"
    Then o usuário deve ver o componente "header-trending" contendo o valor "Em Alta no ano"
    And o anime "Naruto" tem o numero de visualizações "208"
  