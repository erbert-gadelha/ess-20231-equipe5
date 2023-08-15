Feature: Items API

  Scenario: Obter lista de animes
    Given o AnimeService retorna uma lista de objetos anime
    When uma requisição "GET" for enviada para "/EmAlta"
    Then o status da resposta deve ser "200"
    And o JSON da resposta deve ser uma lista composta por animes 
    And o anime com nome "Naruto" está na lista
    And o anime com nome "Kimetsu No Yaiba" está na lista
    And o anime com nome "One Piece" está na lista