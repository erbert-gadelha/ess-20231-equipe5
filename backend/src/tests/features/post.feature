Feature: Publicacao de Posts

    Scenario: Criação de post simples
    Given Eu estou na página "Inicial"
    And Eu sou o usuário "pedro12" 
    And A tag "Review" já existe no sistema
    When Seleciono a opção de criar um novo post
    And Com o título de post "Review episódio 1 de Jujutsu Kaisen"
    And Escolho a tag "Review"
    And Escrevo no corpo "Episódio legal."
    Then Minha review é publicada
    And Eu vejo o post do usuário "pedro12" com título "Episódio legal." e tags "Review"

    Scenario: Criação de post com imagem
    Given Eu estou na página "Inicial"
    And Eu sou o usuário "pedro12" 
    And A tag "Review" já existe no sistema
    When Seleciono a opção de criar um novo post
    And Com o título de post "Review episódio 2 de Jujutsu Kaisen"
    And Escolho a tag "Review"
    And Escrevo no corpo "Essa segunda temporada de Jujutsu Kaisen está muito boa! Episódio fantástico!"
    And Seleciono a opção de anexar um arquivo local de mídia
    And Seleciono o arquivo "screenshot.png"
    Then Minha review é publicada
    And Eu vejo o post do usuário "pedro12" com título "Review episódio 2 de Jujutsu Kaisen" e conteúdo "Essa segunda temporada de Jujutsu Kaisen está muito boa! Episódio fantástico!" e tags "Review"
