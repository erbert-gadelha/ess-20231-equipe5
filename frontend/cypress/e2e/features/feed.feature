Feature: Pagina inicial do site
  As a usuário
  I want acessar a pagina inicial do site
  so that ter acesso aos conteudos mais interessantes


  Scenario: Visualizando os em alta
    Given o usuário está na página "home"
    When a página carregar
    Then o usuário deve ver os items de "list-trending" organizados pelo campo "card-value" em ordem "decrescente"
  
  Scenario: Visualizando os mais vistos
    Given o usuário está na página "home"
    When a página carregar
    Then o usuário deve ver os items de "list-most-viewed" organizados pelo campo "card-value" em ordem "decrescente"
  
  Scenario: Visualizando os mais bem avaliados
    Given o usuário está na página "home"
    When a página carregar
    Then o usuário deve ver os items de "list-most-rated" organizados pelo campo "card-value" em ordem "decrescente"
  
