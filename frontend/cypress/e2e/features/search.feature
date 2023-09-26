Feature: Buscar conteudo
  As a usuário
  I want fazer uma busca de conteudo por tags
  so that eu possa ver os conteudos relacionados

  Scenario: Busca por uma tag
    Given o usuário está na página "home"
    When o usuário preenche o campo "searchbar-input" com "pokemon" e clica no botão "searchbar-button"
    Then o usuário deve ver redirecionado para página "search"
    And o usuário deve ver o post de título "great ball" do usuário "pikachu"
    And o usuário deve ver o post de título "pokemon >> digimon" do usuário "vinicius13"
    And o usuário deve ver o post de título "pokemon eh massa" do usuário "vinicius13"
  
  Scenario: Busca por multiplas tags
    Given o usuário está na página "home"
    When o usuário preenche o campo "searchbar-input" com "pokemon,humor" e clica no botão "searchbar-button"
    Then o usuário deve ver redirecionado para página "search"
    And o usuário deve ver o post de título "great ball" do usuário "pikachu"
    And o usuário deve ver o post de título "pokemon >> digimon" do usuário "vinicius13"
    And o usuário não deve ver o post de título "pokemon eh massa" do usuário "vinicius13"

  Scenario: Busca sem resultados
    Given o usuário está na página "home"
    When o usuário preenche o campo "searchbar-input" com "pokemon,terror" e clica no botão "searchbar-button"
    Then o usuário deve ver redirecionado para página "search"
    And o usuário verá o aviso "Nenhum resultado encontrado"

  Scenario: Salvar buscas recentes
    Given o usuário está na página "home"
    And o usuário não tem pesquisas recentes
    And o usuário preenche o campo "searchbar-input" com "bolo,cachorro" e clica no botão "searchbar-button"
    When o usuário selecionar o campo "searchbar-input"
    Then em "recent-searched" deve	haver a opção "cachorro"
    Then em "recent-searched" deve	haver a opção "bolo"
    
   Scenario: Limpar buscas recentes
    Given o usuário está na página "home"
    And o usuario buscou recentemente por "café, garrafa"
    When o usuário selecionar o campo "searchbar-input"
    And o usuário pressionar o botão "clear-hints"
    Then as buscas recentes deve estar vazia


