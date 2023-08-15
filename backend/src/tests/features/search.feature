Feature: Search API

  Scenario: Buscar por uma tag
    Given estou na página "search"
    And o post "pokemon eh massa" tem a tag "pokemon"
    And o post "pokemon >> digimon" tem as tags "pokemon" e "digimon"
    And o post "great ball" tem as tags "humor" e "pokemon"
    And a barra de pesquisa contém a tag "pokemon"
    When seleciono pesquisar
    Then eu vou para página "Busca de conteúdo"
    And a barra de pesquisa contém a tag "pokemon"
    And o post "pokemon >> digimon" está no corpo da tela
    And o post "pokemon eh massa" está no corpo da tela
    And o post "great ball" está no corpo da tela

  Scenario: Busca por multiplas tags
    Given estou na página "search"
    And o post "pokemon eh massa" tem a tag "pokemon"
    And o post "pokemon >> digimon" tem as tags "pokemon" e "digimon"
    And o post "great ball" tem as tags "humor" e "pokemon"
    And a barra de pesquisa contém as tags "pokemon" e "digimon"
    When seleciono pesquisar
    Then eu vou para página "Busca de conteúdo"
    And a barra de pesquisa contém as tags "pokemon" e "digimon"
    And apenas o post "pokemon >> digimon" estara no corpo da tela

  Scenario: Busca sem correspondencias
    Given estou na página "search"
    And o post "pokemon eh massa" tem a tag "pokemon"
    And o post "pokemon >> digimon" tem as tags "pokemon" e "digimon"
    And o post "great ball" tem as tags "humor" e "pokemon"
    And a barra de pesquisa contém as tags "pokemon" e "onepiece"
    When seleciono pesquisar
    Then eu vou para página "Busca de conteúdo"
    And a barra de pesquisa contém as tags "pokemon" e "onepiece"
    And nenhum post é exibido no corpo da tela