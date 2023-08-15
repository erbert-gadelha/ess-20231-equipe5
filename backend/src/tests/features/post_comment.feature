Feature: Publicação de comentários

    Scenario: Comentando uma Postagem
    Given eu estou na página "inicial"
    And eu sou o usuário "vinicius13"
    And na pagina inicial, há a postagem do usuario "pedro12" de titulo "Review episódio 2 de Jujutsu Kaisen"
    When Seleciono o post
    And seleciono a opção de criar comentário
    And escrevo no corpo "A sua review é horrível."
    And seleciono "publicar comentário"
    Then meu comentário foi publicado, com o campo de usuário sendo "pedro12"
